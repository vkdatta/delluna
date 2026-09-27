export const name="reset_shutter_speed-fill";
export const id="dl_9765498839b35ca7c0d6";
export const url=new URL("../icons/reset_shutter_speed-fill.svg?v=6e19205c7b4f6961ef4b906fb0718b5b2978d8d9e675de62800bcf3f522b6cc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
