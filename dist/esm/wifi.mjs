export const name="wifi";
export const id="dl_caffdfa6845244e6b086";
export const url=new URL("../icons/wifi.svg?v=a27f61886df62a6b89b18455318d8fef43a014c3e0a9c35ec8d2c414f4fe237a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
