export const name="file-text-duotone";
export const id="dl_f0fb5e5fb0ea4e1abc91";
export const url=new URL("../icons/file-text-duotone.svg?v=e65aed9288913c71639ef8ae8fc244c6d08564e508c11e799da6c2966848dfc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
