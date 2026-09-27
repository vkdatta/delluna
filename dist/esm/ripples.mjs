export const name="ripples";
export const id="dl_d4e69c28d6bc04c85bbd";
export const url=new URL("../icons/ripples.svg?v=451ff21abe13e7af94acae95f95147ce2d456a2e5f61db974d1902d54834e96a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
