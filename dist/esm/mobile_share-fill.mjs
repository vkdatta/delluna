export const name="mobile_share-fill";
export const id="dl_e89879dd9ae3736f6dce";
export const url=new URL("../icons/mobile_share-fill.svg?v=df34971f8dfe0b919ba7ef50cc69c6cd1dca8c5fac867af61be2517103ddae5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
