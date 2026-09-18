export const name="shutter_speed_add";
export const id="dl_5b97a923617f46f2b0fe";
export const url=new URL("../icons/S/shutter_speed_add.svg?v=eca5b3749350c430cdd21229e0b9eb74ab0e8497acf9c5bce9c58c166f38c935",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
