export const name="watch_wake-fill";
export const id="dl_c00e645cc6a0b2e8924c";
export const url=new URL("../icons/watch_wake-fill.svg?v=d68955a37ceadda472771c8113eeabb0afbea14296cb64d771c3e08116980eb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
