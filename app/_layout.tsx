import { Stack, useRouter, usePathname } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Layout() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <>
     
      <View style={styles.navbar}>

       
        <Text style={styles.brand}>ProPerform</Text>

        
        <View style={styles.rightBlock}>

         
          <View style={styles.links}>
            <NavItem label="Home" path="/" active={isActive('/')} router={router} />
            <NavItem label="Features" path="/features" active={isActive('/features')} router={router} />
            <NavItem label="Download" path="/download" active={isActive('/download')} router={router} />
            <NavItem label="Über uns" path="/about" active={isActive('/about')} router={router} />
          </View>

         
          <View style={styles.divider} />

          
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Image
              source={require('../assets/images/profile.png')}
              style={styles.profileIcon}
            />
          </TouchableOpacity>

        </View>
      </View>

      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}

function NavItem({ label, path, active, router }: any) {
  return (
    <TouchableOpacity onPress={() => router.push(path)}>
      <Text style={[styles.link, active && styles.active]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 64,
    backgroundColor: '#1E3A8A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 28,
  },

  
  brand: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  
  rightBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },

  
  links: {
    flexDirection: 'row',
    gap: 20,
  },

  link: {
    color: 'white',
    fontSize: 16,
  },

  active: {
    color: '#F97316',
    fontWeight: 'bold',
  },

  
  divider: {
    width: 1,
    height: 28,
    backgroundColor: 'rgba(255,255,255,0.6)',
  },

  
  profileIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
  },
});
