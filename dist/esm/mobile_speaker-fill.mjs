export const name="mobile_speaker-fill";
export const id="dl_18eb3f3dd3159340ca31";
export const url=new URL("../icons/mobile_speaker-fill.svg?v=a19e9c385aa30dbbb760f35cbf4f964c02020c5130111c8e1034d0d8a4af360d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
