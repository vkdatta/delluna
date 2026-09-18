export const name="fit_page_width";
export const id="dl_e00a2400ad5b4046a882";
export const url=new URL("../icons/fit_page_width.svg?v=c029c827c40c650c3cdace6240eaaa19f0298dbb6f6580be1f75629e86e56429",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
