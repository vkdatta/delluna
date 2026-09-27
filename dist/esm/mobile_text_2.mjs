export const name="mobile_text_2";
export const id="dl_c1db0fb7c3e65baa1f1e";
export const url=new URL("../icons/mobile_text_2.svg?v=b04fb5b857b3ed1fcc166db80205266904dc176084fba4807b8274be407b6821",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
