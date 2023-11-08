import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5rem;
  img {
    height: 20vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: black;
    color: #49f585;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
    transition: transform 0.3s ease;
    &:hover {
      transform: translateY(-6px);
      box-shadow: inset 0px 10px 10px 0px rgba(0, 0, 0, 0.1);
    }
    &:active {
      transform: translateY(-2px);
    }
  }
`;

const Login = () => {
  const handleClick = async () => {
    const client_id = "421f37dfd2354987b5397433f426aec3";
    const redirect_uri = "http://localhost:5173/";
    const api_uri = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];

    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };

  return (
    <Container>
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png" alt="spotify" />
      <button onClick={handleClick}>Connect Spotify</button>
    </Container>
  );
};

export default Login;
