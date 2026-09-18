export const name="mobile_layout";
export const id="dl_c2424e355f5e4952a338";
export const url=new URL("../icons/M/mobile_layout.svg?v=46ea6b55353f3775bcf77f1ed13b318ce07829bb333104cfecd3de678d26bfaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
