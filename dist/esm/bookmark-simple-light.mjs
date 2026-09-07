export const name="bookmark-simple-light";
export const id="dl_151b9d79c1a64e5498e0";
export const url=new URL("../icons/bookmark-simple-light.svg?v=bea0f4423317aad20bfc3fff6a248bfc9193b825efc0f02d720760e306dd8571",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
