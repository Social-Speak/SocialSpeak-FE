import React from 'react'
import Button from '@mui/material/Button';

interface buttonProps {
    variant?: string;
}

const CustomButton = ({ variant }: buttonProps) => {
    return (
        <div>
            <Button variant='outlined' className=''>Outlined</Button>
        </div>
    )
}

export default CustomButton