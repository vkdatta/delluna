export const name="lucid_1-air-vent";
export const id="dl_6829cf83da0d41e0b4be";
export const url=new URL("../icons/lucid_1-air-vent.svg?v=5b2aef5cf73c3792c53c1e5a6a8099699468efa1dfc1e20c41a8488105fc730e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
