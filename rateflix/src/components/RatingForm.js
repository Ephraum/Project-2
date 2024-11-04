import { Box, Button, Input, Textarea } from '@chakra-ui/react';
import { useState } from 'react';

function RatingForm({ onSubmit }) {
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    onSubmit({ rating, comment });
    setRating('');
    setComment('');
  };

  return (
    <Box>
      <Input 
        placeholder="Your Rating" 
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <Textarea 
        placeholder="Your Comment" 
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button mt={2} onClick={handleSubmit}>Submit</Button>
    </Box>
  );
}

export default RatingForm;
