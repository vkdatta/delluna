export const name="lucid_1-clock-2";
export const id="dl_cc4ad29881cc40d89132";
export const url=new URL("../icons/lucid_1-clock-2.svg?v=43dbfb5aabc70a22f422128588e7f2e5697c27b19589469a834388a5a9604b21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
