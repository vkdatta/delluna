export const name="gps-thin";
export const id="dl_5c89d0cda3074a62a58c";
export const url=new URL("../icons/gps-thin.svg?v=46f1cc484248424b8e2a0266ff85b4b75af7d97abeea9dd0ca9bc788ed7aac49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
