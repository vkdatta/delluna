export const name="lucid_2-list-end";
export const id="dl_b6da7a1451a247adaf19";
export const url=new URL("../icons/lucid_2-list-end.svg?v=3a0533df013f085cbedea27197b5694e0baee95c6c3da27f6ea402964bfedb3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
