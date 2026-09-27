export const name="emergency_home-fill";
export const id="dl_f3f175f8ac7b0996a698";
export const url=new URL("../icons/emergency_home-fill.svg?v=053e52ad36c4ac29d182a1467616e52fc11fe514f2f3bb1dcd76f57880c67269",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
