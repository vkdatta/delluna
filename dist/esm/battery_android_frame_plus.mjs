export const name="battery_android_frame_plus";
export const id="dl_8b87a92ede8ef791ee1f";
export const url=new URL("../icons/battery_android_frame_plus.svg?v=8245441f61d1a09741a9bc46ebef23e27c340845d2f6c42ed64d70c0067c5aa1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
