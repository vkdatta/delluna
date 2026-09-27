export const name="phone-transfer-bold";
export const id="dl_468b3f86b5d64031825e";
export const url=new URL("../icons/phone-transfer-bold.svg?v=71ffce8148b5e4b90e65c23c108e96221a0d83afe366f098e8105d851bec08eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
