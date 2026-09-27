export const name="lucid_1-circle-equal";
export const id="dl_0feed34b13f54ca39a98";
export const url=new URL("../icons/lucid_1-circle-equal.svg?v=5885c35aaa542357c585bd46e9fc3b192606eb3f0dd4c53b4c764b9d097fb53c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
