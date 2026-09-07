export const name="lectern";
export const id="dl_c5b46b37a67248cfa7fd";
export const url=new URL("../icons/lectern.svg?v=3c97895182c826307ffd67b3ccc79efb460bf79ff8f764798c3c20aa626a0f35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
