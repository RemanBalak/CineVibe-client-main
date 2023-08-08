import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const MovieCard = ({ movie }) => {
  return (
    <Card
      className="h-100"
      style={{
        border: 'none',
        backgroundColor: '#222',
        color: '#fff',
        borderRadius: '10px',
        padding: '5px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
        transition: 'transform 0.2s ease-in-out',
      }}
    >
      <Card.Img
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '10px',
        }}
        variant="top"
        src={movie.image}
      />
      <Card.Body className="h-100 d-flex flex-column">
        <Card.Title
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginTop: '10px',
          }}
        >
          {movie.title}
        </Card.Title>
        <Link
          to={`/movies/${encodeURIComponent(movie.id)}`}
          className="mt-auto"
        >
          <Button
            style={{
              backgroundColor: '#e50914',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              padding: '8px 18px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
            variant="primary"
          >
            Open
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
