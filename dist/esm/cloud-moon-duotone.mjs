export const name="cloud-moon-duotone";
export const id="dl_692df18434fa4a829710";
export const url=new URL("../icons/cloud-moon-duotone.svg?v=3134d7c993dc12cd0cf8d6bd09a7f5db75351a4e6aaf209fb1b1057efce75b78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
