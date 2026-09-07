export const name="tote-simple-fill";
export const id="dl_aee4791d0c644c2a974d";
export const url=new URL("../icons/T/tote-simple-fill.svg?v=62d51c5253e418dc2eccaf9ed9be03131bc5c571245a109a486f32a442092da3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
