export const name="folder-open-duotone";
export const id="dl_7c27b32d0afe4981aaa7";
export const url=new URL("../icons/folder-open-duotone.svg?v=1dffe161c141ddc915ef97be2ca0264f7d1cfb710112a5d51e4b2c86a63e6aae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
