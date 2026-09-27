export const name="person-simple-hike-fill";
export const id="dl_18b03b71818b42f8a56a";
export const url=new URL("../icons/person-simple-hike-fill.svg?v=50d111a7eaf74b2c7ba331d0da958d6718f0075e0f5d53f124d5608f1e3c1615",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
