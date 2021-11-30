import { GraphQLClient, gql } from 'graphql-request'

export const getPostsAndPortfolios = async () => {
  const endpoint = 'https://api-us-east-1.graphcms.com/v2/ckwgpr2oa0h8y01xo1s4m0ihb/master';
  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
			query {
  posts {
    title
    slug
    description
    date
    tags
    author {
      name
      image {
        url
        width
        height
      }
    }
    content {
      markdown
    }
  }
  portfolios {
    title
    tags
    slug
    description
    date
    coverImage {
      url
      width
      height
    }
  }
}
	`;

  return await graphQLClient.request(query,)
}

export const getPortfolioItems = async () => {
  const endpoint = 'https://api-us-east-1.graphcms.com/v2/ckwgpr2oa0h8y01xo1s4m0ihb/master';
  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
			query {
        portfolios {
    title
    tags
    slug
    description
    date
    coverImage {
      url
      width
      height
    }
  }
}
	`;

  return await graphQLClient.request(query,)
}

export const getPosts = async () => {
  const endpoint = 'https://api-us-east-1.graphcms.com/v2/ckwgpr2oa0h8y01xo1s4m0ihb/master';
  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
			query {
  posts {
    title
    slug
    description
    date
    tags
    author {
      name
      image {
        url
        width
        height
      }
    }
    content {
      markdown
    }
  }
}
	`;

  return await graphQLClient.request(query,)
}

export const getPortfolioItem = async (slug) => {
  const endpoint = 'https://api-us-east-1.graphcms.com/v2/ckwgpr2oa0h8y01xo1s4m0ihb/master';
  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
  query getPortfolio($slug: String!) {
    portfolio(where: {slug: $slug}) {
      title
      tags
      slug
      description
      date
      coverImage {
        url
        width
        height
      }
      content {
        markdown
      }
    }
  }
	`;

  const variables = {
    slug
  }

  return await graphQLClient.request(query, variables)
}

export const getPortfolioSlugs = async () => {
  const endpoint = 'https://api-us-east-1.graphcms.com/v2/ckwgpr2oa0h8y01xo1s4m0ihb/master';
  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
			query {
  portfolios {
    slug
  }
}
	`;

  return await graphQLClient.request(query,)
}