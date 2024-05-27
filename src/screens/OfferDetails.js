import React from 'react';
import { View, Text, Button, Alert, Image, StyleSheet, ScrollView } from 'react-native';

const OfferDetails = ({ route }) => {
  const { offer } = route.params;

  const claimOffer = () => {
    Alert.alert(
      "Confirm Claim",
      "Do you want to claim this offer?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Claim",
          onPress: () => {
            setTimeout(() => {
              Alert.alert("Success", "Offer claimed successfully!");
            }, 1000);
          }
        }
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: offer.retailerLogo }} style={styles.logo} />
      <Text style={styles.title}>{offer.title}</Text>
      <Text style={styles.description}>{offer.description}</Text>
      <Text style={styles.detail}>Cashback: {offer.cashbackAmount}%</Text>
      <Text style={styles.detail}>Expires: {offer.expirationDate}</Text>
      <Text style={styles.terms}>{offer.termsAndConditions}</Text>
      <Button title="Claim Offer" onPress={claimOffer} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  detail: {
    fontSize: 16,
    marginBottom: 10,
  },
  terms: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
});

export default OfferDetails;
