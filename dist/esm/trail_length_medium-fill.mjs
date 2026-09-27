export const name="trail_length_medium-fill";
export const id="dl_de8516ab34289466f2dd";
export const url=new URL("../icons/trail_length_medium-fill.svg?v=dc61a1ff1f342073dc4c61f494b499ff3713cd6128d7127353b71d7dfbd4ce68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
