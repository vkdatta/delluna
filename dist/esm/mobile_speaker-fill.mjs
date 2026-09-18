export const name="mobile_speaker-fill";
export const id="dl_28d092876fc74679ab27";
export const url=new URL("../icons/mobile_speaker-fill.svg?v=8108a69cab863980e8642d82985716de578fd3de2407b83c1667ff24f99f38ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
