export const name="lucid_1-clock-alert";
export const id="dl_fdd2d21248fe4457a855";
export const url=new URL("../icons/lucid_1-clock-alert.svg?v=2c9f8aee4a16777a87705d0e5f3f50985f0456e0974f71ab6b231fce33f5d084",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
