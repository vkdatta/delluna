export const name="star-thin";
export const id="dl_50d21f99d87a40f6874d";
export const url=new URL("../icons/S/star-thin.svg?v=5197d618d64bedb10ad376d8b565a4272ceba1912070985ccabff413729c57bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
