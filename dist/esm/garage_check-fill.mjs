export const name="garage_check-fill";
export const id="dl_941e81815fb713a19c0f";
export const url=new URL("../icons/garage_check-fill.svg?v=b288da909827288aaa177d2f7b57ee6dce4f462d13142600e089f15b94017b5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
