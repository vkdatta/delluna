export const name="water_drops";
export const id="dl_55b7f9eaac52483abc97";
export const url=new URL("../icons/W/water_drops.svg?v=6eadaeafe27685da5ccf756d7708e82b07fa767c73e6e43f1b51eb65ce4cd207",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
