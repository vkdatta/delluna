export const name="person-simple";
export const id="dl_24f3653a08064038a789";
export const url=new URL("../icons/person-simple.svg?v=54b92bc529116803220b4da82e7c715ed93683b509820821375702868561e13e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
