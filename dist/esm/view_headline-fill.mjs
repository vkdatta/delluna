export const name="view_headline-fill";
export const id="dl_22089ff0b5624e388880";
export const url=new URL("../icons/view_headline-fill.svg?v=460cc800c38854923923e787c463d7a76e2c9fa8704caff5e3d1d7902fdb97bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
