export const name="rewarded_ads-fill";
export const id="dl_0bfc740c02193f76058d";
export const url=new URL("../icons/rewarded_ads-fill.svg?v=eaee5ae652e4a92a617afeb18d2c9e9aaef0dc6fb8f5a23c1bb12942e631ee13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
