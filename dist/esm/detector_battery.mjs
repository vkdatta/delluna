export const name="detector_battery";
export const id="dl_86b2d81f9f6901f2ea99";
export const url=new URL("../icons/detector_battery.svg?v=41e27f6c06ebeeff152a4f80d4a56f14850a1b32c9160f0a8090d4956add4c75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
