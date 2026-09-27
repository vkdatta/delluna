export const name="orange-slice-duotone";
export const id="dl_0dcd78e1399943cbb465";
export const url=new URL("../icons/orange-slice-duotone.svg?v=1c1d7a6e2a3366127b775f2e67f985ea5df8fa69ffc86ac7ad89c42767f7b7f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
