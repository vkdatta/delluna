export const name="mode_dual";
export const id="dl_e79a21fd82c3ef146d97";
export const url=new URL("../icons/mode_dual.svg?v=076d66dc00ccb92c05492d45357c8376e8ee5c5abdca656bda13132cce8ac87b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
