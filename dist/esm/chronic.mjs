export const name="chronic";
export const id="dl_376623e6434055b30dc2";
export const url=new URL("../icons/chronic.svg?v=f1347c014c28a90abcf64759dd91b7fdd1c5fb05fa9b8bd11222926ca9d8a49e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
