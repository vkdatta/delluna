export const name="arrows-counter-clockwise-duotone";
export const id="dl_aef525055b994ca88e46";
export const url=new URL("../icons/arrows-counter-clockwise-duotone.svg?v=d464288d8207ef9bd61bed09a1cf8a51e8ceea80e5ff96c29ce52f2c3026523d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
