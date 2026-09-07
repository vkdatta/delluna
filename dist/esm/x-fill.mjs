export const name="x-fill";
export const id="dl_ee6cf280833a4734acbe";
export const url=new URL("../icons/X/x-fill.svg?v=6ec0689770c1fb1dc7018039bef101079d2d20931c4661c3981cbe956f20c872",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
