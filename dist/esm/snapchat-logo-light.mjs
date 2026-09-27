export const name="snapchat-logo-light";
export const id="dl_a7208db86d286005319b";
export const url=new URL("../icons/snapchat-logo-light.svg?v=61df2dcfd1155eac815040ccdbc6584ffb240da3a6b18ddf7f5c6fdb17abddaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
