const headers = new Headers({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

export default class GithubAPI {
  static async getAllRepos(username) {
    try {
      const repos = await fetch(
        `https://api.github.com/users/${username}/repos`,
        {
          method: 'GET',
          headers: headers,
        }
      );
      return await repos.json();
    } catch (e) {
      return null;
    }
  }
}