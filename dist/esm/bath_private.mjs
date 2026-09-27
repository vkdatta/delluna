export const name="bath_private";
export const id="dl_e00a4b19809d73282333";
export const url=new URL("../icons/bath_private.svg?v=14aa916472ec00db8374c18c45d02adbc0e4956fc5dd0c2016a281065e0864a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
