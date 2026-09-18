export const name="text_rotate_up-fill";
export const id="dl_7dc41f4c1b42482ab016";
export const url=new URL("../icons/text_rotate_up-fill.svg?v=50f8ef89aa1d98377f1c81e1a0f0527135bfc1d08a6e9f10b55ee9a84bcfc751",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
