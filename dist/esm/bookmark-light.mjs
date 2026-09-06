export const name="bookmark-light";
export const id="dl_3336e74aff834c2ebb0f";
export const url=new URL("../icons/bookmark-light.svg?v=8a327c009df1bf3cafc0fcf841f82f9bfec790d917f526bee2403c14e7896816",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
