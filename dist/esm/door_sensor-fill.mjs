export const name="door_sensor-fill";
export const id="dl_2b2188307d8b1880677c";
export const url=new URL("../icons/door_sensor-fill.svg?v=28a0e5b066166e4b32e4206f2813da7efeafa410a7649e19796e3c921abf47b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
