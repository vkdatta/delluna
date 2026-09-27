export const name="upload_2";
export const id="dl_e302bfd66ac786bac26e";
export const url=new URL("../icons/upload_2.svg?v=7125d12cd4b995f1c3884a1a7fa768f51e46f722dd18c304d0a043607a15a134",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
