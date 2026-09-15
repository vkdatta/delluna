export const name="elevator";
export const id="dl_84b0961f34254773b1f0";
export const url=new URL("../icons/E/elevator.svg?v=419b61fc848b86c3939fdb160042ff283b39083bf5409c3878f5ae2b5d211d31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
