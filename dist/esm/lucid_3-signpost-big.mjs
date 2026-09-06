export const name="lucid_3-signpost-big";
export const id="dl_c2ecc450dd9d46b4a1a1";
export const url=new URL("../icons/lucid_3-signpost-big.svg?v=5766c884568001b39b722b72b919c8a1c689001c2ae318ff5f40f7e4085df2ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
