const INITIAL_STATE = {
    sections: [{
        title: 'hats',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/07/02/20/13/hats-829509_960_720.jpg',
        id: 1,
        linkUrl: 'shop/hats'
    },
    {
        title: 'jackets',
        imageUrl: 'https://cdn.pixabay.com/photo/2014/08/26/21/49/jackets-428622_960_720.jpg',
        id: 2,
        linkUrl: 'shop/jackets'
    },
    {
        title: 'sneakers',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTa-Ipn19bCEQUpm5HKtWyAfC_DXSG_bueeddB_7gKdtVG5pu4&s',
        id: 3,
        linkUrl: 'shop/sneakers'
    },
    {
        title: 'women',
        imageUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        size: 'large',
        linkUrl: 'shop/women',
        id: 4
    },
    {
        title: 'men',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZEphY3UwmWYcEOvqGnO4NDQPT0SclIe9_bNfsYWa5GCU8FmT&s',
        size: 'large',
        linkUrl: 'shop/men',
        id: 5
    }]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;