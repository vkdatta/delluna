export const name="border_outer-fill";
export const id="dl_f83bc6c9bc78bc7fc1ab";
export const url=new URL("../icons/border_outer-fill.svg?v=5018ab4142eb0b3f40fd5aae07b673797a92073250553ebd84641b33c17c9c0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
