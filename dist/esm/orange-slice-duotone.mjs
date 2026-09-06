export const name="orange-slice-duotone";
export const id="dl_0dcd78e1399943cbb465";
export const url=new URL("../icons/orange-slice-duotone.svg?v=ce297a926c6f6ec232cb48dfcbaa7e60430f502e87d41e7996e96d40bf6b24b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
