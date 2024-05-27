import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Image, StyleSheet, Button } from 'react-native';
import { mockResponse } from '../api/mockData';

const OfferFeed = ({ navigation }) => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate an API call delay
    setTimeout(() => {
      setOffers(mockResponse.offers);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Error loading offers.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={offers}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('OfferDetails', { offer: item })}>
          <View style={styles.offerContainer}>
            <Image source={{ uri: item.retailerLogo }} style={styles.logo} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.cashback}>Cashback: {item.cashbackAmount}%</Text>
              <Text style={styles.expiration}>Expires: {item.expirationDate}</Text>
            </View>
            {/*<Button title="Claim Offer" onPress={() => {}} />*/}
          </View>
        </TouchableOpacity>
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  offerContainer: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  cashback: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  expiration: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  separator: {
    height: 10,
  },
});

export default OfferFeed;
