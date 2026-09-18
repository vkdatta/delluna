export const name="location_searching-fill";
export const id="dl_8030366c6b73470d88cc";
export const url=new URL("../icons/L/location_searching-fill.svg?v=26573da9850039109f2aea3c0d8f2eea2144f107bbcf9e3f2fac1d052067ae61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
