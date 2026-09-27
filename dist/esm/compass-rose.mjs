export const name="compass-rose";
export const id="dl_783b3049a1d44df49b34";
export const url=new URL("../icons/compass-rose.svg?v=d93f81c4009990d1c952dad2fb22b09c8cf8a4268e73b5e5b28c30c5cea7582e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
