export const name="search-add";
export const id="dl_5c125aea4bf946c6b0f7";
export const url=new URL("../icons/add/search-add.svg?v=e66ee0131a79129e2f0a5c1fe28f32588abbfcc40e221f1db6fcedeee4d5d203",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
