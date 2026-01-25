import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>

      
      <View style={styles.vid}>
        <Image source={require('../assets/images/placeholder.png')} style={styles.vidImg} />
        <Image source={require('../assets/images/placeholder.png')} style={styles.vidImg} />
      </View>

      {/* boxen */}
      <View style={styles.boxRow}>

        {/* blaue Feature Box */}
        <View style={styles.boxBlue}>
          <Image
            source={require('../assets/images/placeholder.png')}
            style={styles.boxImage}
          />

          <View style={styles.boxContent}>
            <Text style={styles.boxTitle}>
              Werde stärker. Trainiere smarter.
            </Text>

            <Text style={styles.boxText}>
              Lade dir die App herunter und starte dein Training mit
              Videos, Übungen und Fortschrittstracking.
            </Text>

            <TouchableOpacity
              style={styles.downloadButton}
              onPress={() => router.push('/download')}
            >
              <Text style={styles.downloadButtonText}>Download</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Graue Feature Box */}
        <View style={styles.boxGray}>
          <Text style={styles.featuresTitle}>App</Text>

          <View style={styles.featuresList}>
            <Text>🏋️ Individuelle Trainingspläne</Text>
            <Text>🎥 Video-Anleitungen</Text>
            <Text>📈 Fortschritt verfolgen</Text>
            <Text>🤝 Trainer-Verbindung</Text>
          </View>

          <TouchableOpacity onPress={() => router.push('/features')}>
            <Text style={styles.moreFeatures}>Mehr Features →</Text>
          </TouchableOpacity>
        </View>

      </View>

      {/* komiis */}
      <View style={styles.testimonialSection}>
        <Testimonial text="Als Trainer habe ich besseren Überblick über meine Athleten." />
        <Testimonial text="Als Athlet sehe ich genau meine Schwächen und Fortschritte." reverse />
        <Testimonial text="Auch ohne Trainer kann ich strukturiert trainieren." />
      </View>

      <View style={{ height: 80 }} />
    </ScrollView>
  );
}

function Testimonial({ text, reverse }: any) {
  return (
    <View style={[styles.testimonialRow, reverse && styles.reverse]}>
      <Image
        source={require('../assets/images/profile.png')}
        style={styles.testimonialIcon}
      />

      <View style={styles.testimonialBubble}>
        <View style={styles.orangeOverlay} />
        <Text style={styles.testimonialText}>{text}</Text>
      </View>
    </View>
  );
}

{/* styles */}
const styles = StyleSheet.create({
  vid: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    padding: 40,
  },
  vidImg: {
    width: 300,
    height: 180,
    backgroundColor: '#ccc',
  },

  
  boxRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
    paddingVertical: 60,
  },

  boxBlue: {
    backgroundColor: '#1E3A8A',
    borderRadius: 24,
    padding: 32,
    width: 560,
    height: 300,
    flexDirection: 'row',
    gap: 24,
    alignSelf: 'center',
  },

  boxGray: {
    backgroundColor: '#e5e5e5',
    borderRadius: 24,
    padding: 32,
    width: 560,
    height: 300,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  boxImage: {
    width: 140,
    height: 236,
    borderRadius: 16,
  },

  boxContent: {
    flex: 1,
    justifyContent: 'center',
  },

  boxTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 35,
  },

  boxText: {
    color: 'white',
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 35,
  },

  downloadButton: {
    backgroundColor: '#F97316',
    paddingVertical: 10,
    paddingHorizontal: 26,
    borderRadius: 20,
    alignSelf: 'flex-start',
  
  },

  downloadButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  featuresTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    alignItems: 'center',
  },

  featuresList: {
    marginTop: 20,
    gap: 20,
    alignItems: 'center',
  },

  moreFeatures: {
    marginTop: 16,
    color: '#1E3A8A',
    fontWeight: 'bold',
    
  },

  
  testimonialSection: {
    backgroundColor: '#eee',
    paddingVertical: 40,
    gap: 24,
  },

  testimonialRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
  },

  reverse: {
    flexDirection: 'row-reverse',
  },

  testimonialIcon: {
    width: 60,
    height: 60,
    borderRadius: 22,
  },

  testimonialBubble: {
    backgroundColor: '#1E3A8A',
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 18,
    width: 520,
    position: 'relative',
  },

  orangeOverlay: {
    position: 'absolute',
    top: '50%',
    left: '30%',
    transform: [{ translateX: -70 }, { translateY: -8 }],
    width: 300,
    height: 16,
    backgroundColor: 'rgba(249,115,22,0.45)',
    borderRadius: 8,
  },

  testimonialText: {
    color: 'white',
    fontSize: 15,
    lineHeight: 20,
  },
});
