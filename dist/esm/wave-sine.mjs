export const name="wave-sine";
export const id="dl_9e2dbfd101bc75b56f8d";
export const url=new URL("../icons/wave-sine.svg?v=ee484650a91aa215c050b54bffee2b4e63fd559f2be67d5136bc534ee49225a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
