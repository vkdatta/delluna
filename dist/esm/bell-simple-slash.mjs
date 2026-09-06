export const name="bell-simple-slash";
export const id="dl_08e09f0b9b904585bea4";
export const url=new URL("../icons/bell-simple-slash.svg?v=fa4c7d83c9465e1f499deb3c5740cc01462b6d3d7cf1d300d63c80f18ffa9af0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
