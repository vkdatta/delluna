export const name="fish-simple-fill";
export const id="dl_24d5b383561541c487d3";
export const url=new URL("../icons/fish-simple-fill.svg?v=7bc2c226313442a6a53041a52e1c2639dd7d76e138fb4abf8e588ec53fc5d9f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
