# range_series

## Utilisation

Ma solution a été conçue pour effectuer un traitement exclusivement côté client, éliminant ainsi le besoin d'installer des outils supplémentaires. La section de saisie manuelle permet à l'utilisateur de saisir manuellement les numéros lorsque leur quantité est minimale.

Remarque : Actuellement, la règle de référencement d'étiquettes est codée en dur.

Pour des cas où la quantité de nombres à introduire serait considérablement élevée, j'ai envisagé la possibilité de générer une règle pour la création d'étiquettes sous la forme d'une instruction en TypeScript.

Les numéros pourraient ensuite être introduits sous forme de fichier JSON, et finalement, les objets avec les correspondances numéro-étiquettes seraient récupérés par téléchargement.

Remarque: noter que la mise en œuvre de cette solution n'a pas encore été finalisée, il manque l'implémentation d'une fonction pour convertir les ranges à son équivalent sous forme de string. J'avais  envisagé d'utiliser le code ASCII et appliquer une conversion pour convertir un integer en son correspondat alphabethique.

Dans le dossier "Sample documents", vous trouverez des exemples de plages de numéros au format JSON que j'ai utilisés pour effectuer des tests de téléchargement et de traitement de données. J'ai également inclus une règle de création de ranges en TypeScript que j'ai utilisée pour ces tests.


