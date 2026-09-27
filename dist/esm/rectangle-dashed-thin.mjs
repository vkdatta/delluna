export const name="rectangle-dashed-thin";
export const id="dl_5327b65bfe2c4c47a4d5";
export const url=new URL("../icons/rectangle-dashed-thin.svg?v=e50f4b9cd14aa1e1161c6502a5ace0ac822db59523fe5a4c295718f99d94f77c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
