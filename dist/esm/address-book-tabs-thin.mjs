export const name="address-book-tabs-thin";
export const id="dl_77dfca76f7134f218cd8";
export const url=new URL("../icons/address-book-tabs-thin.svg?v=fd4f75a3df699c31535064db91aa7642411bd31704d696b237c5c013f051b217",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
