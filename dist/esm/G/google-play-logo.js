export const name="google-play-logo";
export const id="dl_c84108562e8a4b4c9ecf";
export const url=new URL("../../icons/G/google-play-logo.svg?v=2cbc43ae6e4bb4e6732c96e68de8b809e5364a628e215e93e10fbbce5b246b15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
