export default function Head() {
  const title =
    process.env.NEXT_PUBLIC_SITE_NAME +
    " - " +
    process.env.NEXT_PUBLIC_SITE_TAGLINE;
  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={process.env.NEXT_PUBLIC_SITE_NAME} />
      <link rel="icon" href="/img/favicon.png" />
    </>
  );
}
