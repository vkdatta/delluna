export const name="screenshot_tablet-fill";
export const id="dl_73d973319695c095c6f4";
export const url=new URL("../icons/screenshot_tablet-fill.svg?v=7baae32837df5622e0ee3e7c8e35f56579a65dc11ee72f8ece884fc9e76cd916",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
