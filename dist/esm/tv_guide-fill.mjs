export const name="tv_guide-fill";
export const id="dl_336e446601de4c3f82de";
export const url=new URL("../icons/tv_guide-fill.svg?v=1b11aa52837ef39f6ef943f6ef47d153eac00442a68a81772b392d7ce61c3cbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
