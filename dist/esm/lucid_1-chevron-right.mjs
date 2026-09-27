export const name="lucid_1-chevron-right";
export const id="dl_9f04f58bc8334bcdb5ac";
export const url=new URL("../icons/lucid_1-chevron-right.svg?v=52b9c4abc5724d1672c8bebf821f98bc150586f9f586546ca5ad15afdb6f0c48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
