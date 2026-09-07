export const name="pinwheel-fill";
export const id="dl_36ab15fa8f5247b5951e";
export const url=new URL("../icons/pinwheel-fill.svg?v=0708655c26db26bb9a588867d38fe4d6d1b4118c64275f8c42fded8cb6ded7e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
