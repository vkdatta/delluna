export const name="8k";
export const id="dl_4aaada6049395194a244";
export const url=new URL("../icons/8k.svg?v=b4d097dd50dd3af2de2851a0a65df617afd4581879d7e25d2207bb3d5e0908d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
