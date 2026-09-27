export const name="ripples-fill";
export const id="dl_4d5e9732acb247769ab8";
export const url=new URL("../icons/ripples-fill.svg?v=8a303c7dcce1cbd5f800ac90bc653318c290057f611b0a8b2818a20cd9b0113c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
