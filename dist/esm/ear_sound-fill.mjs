export const name="ear_sound-fill";
export const id="dl_96f5e6738ca4af9e5151";
export const url=new URL("../icons/ear_sound-fill.svg?v=68e18f814740de9b7b3774d4130d1681dbbec7903e721e9bcba3039aaad14db4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
