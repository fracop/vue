<template>
  <div class='cp'>
    <h1>{{ listeCp }}</h1>
  </div>
</template>
<script>
export default {
  name: 'cp',
  data () {
    return {
      listeCp: [
        { 'Code_commune_INSEE': 40072, 'Nom_commune': 'CASTELNAU TURSAN', 'Code_postal': 40320, 'Libelle_acheminement': 'CASTELNAU TURSAN', 'Ligne_5': '' },
        { 'Code_commune_INSEE': 40073, 'Nom_commune': 'CASTELNER', 'Code_postal': 40700, 'Libelle_acheminement': 'CASTELNER', 'Ligne_5': '' },
        { 'Code_commune_INSEE': 33063, 'Nom_commune': 'BORDEAUX', 'Code_postal': 33000, 'Libelle_acheminement': 'BORDEAUX', 'Ligne_5': '' },
        { 'Code_commune_INSEE': 59319, 'Nom_commune': 'HOYMILLE', 'Code_postal': 59492, 'Libelle_acheminement': 'HOYMILLE', 'Ligne_5': '' },
        { 'Code_commune_INSEE': 59322, 'Nom_commune': 'IWUY', 'Code_postal': 59141, 'Libelle_acheminement': 'IWUY', 'Ligne_5': '' },
        { 'Code_commune_INSEE': 59324, 'Nom_commune': 'JEUMONT', 'Code_postal': 59460, 'Libelle_acheminement': 'JEUMONT', 'Ligne_5': '' },
        { 'Code_commune_INSEE': 59333, 'Nom_commune': 'LAROUILLIES', 'Code_postal': 59219, 'Libelle_acheminement': 'LAROUILLIES', 'Ligne_5': '' },
        { 'Code_commune_INSEE': 59338, 'Nom_commune': 'LEDRINGHEM', 'Code_postal': 59470, 'Libelle_acheminement': 'LEDRINGHEM', 'Ligne_5': '' },
        { 'Code_commune_INSEE': 59340, 'Nom_commune': 'LEFFRINCKOUCKE', 'Code_postal': 59495, 'Libelle_acheminement': 'LEFFRINCKOUCKE', 'Ligne_5': '' },
        { 'Code_commune_INSEE': 59341, 'Nom_commune': 'LESDAIN', 'Code_postal': 59258, 'Libelle_acheminement': 'LESDAIN', 'Ligne_5': '' }
      ]
    }
  }
}
</script>
