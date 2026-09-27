export const name="skateboarding-fill";
export const id="dl_996eb1293a9a45386225";
export const url=new URL("../icons/skateboarding-fill.svg?v=94107ca6df1cfa5ccab18c1818ed357e5babaf522a0fd580edf2a7c3e0709427",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
