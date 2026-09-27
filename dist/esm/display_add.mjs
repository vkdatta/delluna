export const name="display_add";
export const id="dl_739bc6cbcbc5e517fa55";
export const url=new URL("../icons/display_add.svg?v=c94f29519083685ff6f2248933f54ebabb439e87d991955417749f53ee211e3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
