export const name="code_off-fill";
export const id="dl_2bf00f716380d8897f0a";
export const url=new URL("../icons/code_off-fill.svg?v=d458e8e4b0ef6dc1ed18478adebb63f7f7dff8ce4e6b80dc1c3f110868f16ed5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
