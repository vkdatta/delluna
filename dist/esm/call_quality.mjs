export const name="call_quality";
export const id="dl_216a33c8d3a383486f9a";
export const url=new URL("../icons/call_quality.svg?v=15f26a2d0339cf191e45bc63c52b2ef120c39ef13b69e62835d32cb01b671c13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
