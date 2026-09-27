export const name="security_key-fill";
export const id="dl_ec0bb9070372221d5774";
export const url=new URL("../icons/security_key-fill.svg?v=e6a0782c9b135871b6b4811e0b5cebb3eae332f0d0b41be299a4c1abdc4bdfb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
