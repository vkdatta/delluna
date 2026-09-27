export const name="lucid_2-copy-x";
export const id="dl_d3d438c73bba460886aa";
export const url=new URL("../icons/lucid_2-copy-x.svg?v=0859731d8a4ab7d0466b8343712e871ce0f06597ae611963d8e73a338670d995",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
