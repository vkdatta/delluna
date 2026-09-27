export const name="file-cloud-light";
export const id="dl_94521b415892407db452";
export const url=new URL("../icons/file-cloud-light.svg?v=4e8224f515b0dfff40170d82c39ae8aef3a7463b71e747f140cb116feeabf393",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
