export const name="tsunami-fill";
export const id="dl_69543aa5e3234841a8a7";
export const url=new URL("../icons/tsunami-fill.svg?v=62e2db77c00b09bf2695981959c1581d30e568b1b60dfe5c6f4a516fd73431b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
