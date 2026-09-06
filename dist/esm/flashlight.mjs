export const name="flashlight";
export const id="dl_747722f7223f40bbb480";
export const url=new URL("../icons/flashlight.svg?v=57b4b07fc11f5df19951ee3ccad268f9067f31932586f773c685c739e66273c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
