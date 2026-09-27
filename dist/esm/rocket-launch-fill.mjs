export const name="rocket-launch-fill";
export const id="dl_917bbe697de3450f8d43";
export const url=new URL("../icons/rocket-launch-fill.svg?v=066801b24040ae43d80fd82c013abd3d6c8e836a5e84f1836a9ebd8e2d48895f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
