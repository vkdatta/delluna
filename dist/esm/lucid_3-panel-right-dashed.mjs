export const name="lucid_3-panel-right-dashed";
export const id="dl_fede5f249a6d42529fc8";
export const url=new URL("../icons/lucid_3-panel-right-dashed.svg?v=79654a51aa4690696cdced943c405342aff09b67a63d1d97acb65d183d2928a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
