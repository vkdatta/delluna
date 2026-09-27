export const name="splitscreen_portrait-fill";
export const id="dl_0ac60e73b6cf3fe059a3";
export const url=new URL("../icons/splitscreen_portrait-fill.svg?v=b05e7cb981f4b1e0e2bcde38e5762540c6b48dc95805ca51b166d97a3ded5d0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
