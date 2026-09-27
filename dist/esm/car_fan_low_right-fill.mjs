export const name="car_fan_low_right-fill";
export const id="dl_f371116ee3a5cb3c83dd";
export const url=new URL("../icons/car_fan_low_right-fill.svg?v=58cd3d2fe725af1d0a3bc5fcbc09ca9109a6944ef71f22a770fa0dc31b37b163",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
