export const name="shutter_speed_minus";
export const id="dl_a050025f0e089159f911";
export const url=new URL("../icons/shutter_speed_minus.svg?v=52defd5bda8ad8d5a86dc19f5aae0496a3dec13fa33a828de5176b8d5ef69f62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
