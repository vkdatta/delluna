export const name="full_hd";
export const id="dl_bdda7f7c74af0425f407";
export const url=new URL("../icons/full_hd.svg?v=5736b0e0337a4bbf9d41888fe29f671c9ad011bbb48ce8a42b88c04cde4753da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
