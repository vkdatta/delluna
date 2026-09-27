export const name="identification-card-bold";
export const id="dl_b67e299d2e0447dfbd40";
export const url=new URL("../icons/identification-card-bold.svg?v=307184d2dff85a5da962c623a2b5ec7c77d41a07f12693d1e09312f1d6764315",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
