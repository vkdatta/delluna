export const name="file-rs-thin";
export const id="dl_df8674f107de44eb922c";
export const url=new URL("../icons/file-rs-thin.svg?v=d6f68905dfc025a116c33dd773a56a456da068bc83fcd40a06db148faeb81b2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
