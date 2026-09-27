export const name="intersect-three";
export const id="dl_4544db3f81004c57bee9";
export const url=new URL("../icons/intersect-three.svg?v=1afcc189d569165c02723f994fb8b1045dbe0211b6702fa421f86b987090a7fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
