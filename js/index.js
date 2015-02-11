OAuth.initialize('KKm7o9nR2-5SDvDAdXwUyBp27NE');
OAuth.popup('twitter', {cache: true}).done(function(twitter) {
  //make API calls with `twitter`
}).fail(function(err) {
  //todo when the OAuth flow failed
})