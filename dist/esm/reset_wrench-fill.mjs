export const name="reset_wrench-fill";
export const id="dl_c3943b75ff05e0dcb22e";
export const url=new URL("../icons/reset_wrench-fill.svg?v=ee42afc5c96fa13fa6826eaa4071a6a42c5234c2f6c7db941477e1ad00e5673a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
