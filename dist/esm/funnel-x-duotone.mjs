export const name="funnel-x-duotone";
export const id="dl_dbe48b5d0cfb45d1abfc";
export const url=new URL("../icons/funnel-x-duotone.svg?v=4e0d9fef26c8be391216fc3f1cfd8ec9ed34ebb7ebb4845e3ae7fb2706a3db49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
