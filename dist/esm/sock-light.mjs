export const name="sock-light";
export const id="dl_2776018d438a1db6e2cc";
export const url=new URL("../icons/sock-light.svg?v=8b3e7db2f399df1f686b2d9efd10a5275714e974f6b1398ffa933ab5f787eb56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
