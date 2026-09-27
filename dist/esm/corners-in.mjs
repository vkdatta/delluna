export const name="corners-in";
export const id="dl_f5bf83c771bc4dec9604";
export const url=new URL("../icons/corners-in.svg?v=1f4d0aa8e6771b1f1574be7d58306c860524b9612d2f0c05671193410a7d5088",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
