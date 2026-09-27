export const name="building-apartment";
export const id="dl_0d708e9c47ad48b4a7a7";
export const url=new URL("../icons/building-apartment.svg?v=72220b1e75505be6172254ac79cb3a954afdafbee7a300161693053f5e3218d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
