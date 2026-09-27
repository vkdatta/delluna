export const name="battery_android_frame_bolt";
export const id="dl_cdd0ede0e52adf9866bf";
export const url=new URL("../icons/battery_android_frame_bolt.svg?v=d00dc496ddfbca27337e9e786a022e357b60b99e67d54ba6f8e162baa9416cd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
