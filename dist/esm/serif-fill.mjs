export const name="serif-fill";
export const id="dl_82ba87b7dd66ff4501a9";
export const url=new URL("../icons/serif-fill.svg?v=161286b072ea258d2dfc5097d22cd2a9dbed650ce001ba38299f322de37803d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
