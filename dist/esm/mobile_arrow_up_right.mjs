export const name="mobile_arrow_up_right";
export const id="dl_29e0a65b331d101b393b";
export const url=new URL("../icons/mobile_arrow_up_right.svg?v=8868526a022d1cad2e29bf1a23ff58f966ccde09e782792a75900194bd09edbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
