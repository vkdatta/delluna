export const name="night_sight_max";
export const id="dl_a200c7770f4549058f41";
export const url=new URL("../icons/N/night_sight_max.svg?v=1ccb746faf6ebf7ed1326e4f063692baac6a6ffffba0d7480028ad866e8cd462",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
