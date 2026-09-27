export const name="list_2-fill";
export const id="dl_e9534114f7ad436d9a7e";
export const url=new URL("../icons/list_2-fill.svg?v=b56a3654416422faa9714357146c903f0ac77878e80db1b347b8d01fdb1f6d2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
