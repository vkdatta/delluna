export const name="vertical_shades";
export const id="dl_2ce6ef742ed14f7c8bd0";
export const url=new URL("../icons/vertical_shades.svg?v=445c3c971c4aea2c0ecdb687bcffa128399451defac3ed1f2a7030cab38e28e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
