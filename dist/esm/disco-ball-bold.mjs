export const name="disco-ball-bold";
export const id="dl_73ebee3eb0784380b6d8";
export const url=new URL("../icons/disco-ball-bold.svg?v=3d1c8691fbe0dcb68ce9c476712d1bc973868d38e1e892d50a62eceabe8a7adb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
