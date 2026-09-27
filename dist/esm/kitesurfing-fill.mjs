export const name="kitesurfing-fill";
export const id="dl_72f494bf50ae575ae1c9";
export const url=new URL("../icons/kitesurfing-fill.svg?v=83d02f4ff12624945adcfcd6d90e68ce8082a60dca8421e6d4df4e4833a33c19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
