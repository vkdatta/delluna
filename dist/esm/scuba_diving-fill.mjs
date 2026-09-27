export const name="scuba_diving-fill";
export const id="dl_4e23a53b4c015f7d64ae";
export const url=new URL("../icons/scuba_diving-fill.svg?v=411fbb60806073eda05ee0769aeac6cea40c6aab031f4a08f91e4a8e4341288c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
