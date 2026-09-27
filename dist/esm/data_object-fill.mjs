export const name="data_object-fill";
export const id="dl_8abe6b5bb23b88b117ae";
export const url=new URL("../icons/data_object-fill.svg?v=0302cf0abbc794d557be43c36bdd07a1ab9bbdaa7656c57f79d592963d4e6843",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
