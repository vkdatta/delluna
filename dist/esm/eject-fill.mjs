export const name="eject-fill";
export const id="dl_779e47a208c24b9f9c3a";
export const url=new URL("../icons/eject-fill.svg?v=3ba424dc9e1a09cf923c992807148abcfb84af6981cecc99e4474b58205e32c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
