export const name="spade-thin";
export const id="dl_fad9b9a3ad4d13ee03cf";
export const url=new URL("../icons/spade-thin.svg?v=1e1c44ec564e0160e0322840a0ce447b7b53b5456e8e57a3a63a51c01e499d38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
