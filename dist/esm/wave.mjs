export const name="wave";
export const id="dl_88fb564deb76431cb113";
export const url=new URL("../icons/wave.svg?v=ca00b225da115dc92e33934fccfb6f0ddcbd148cf8b68878b0e1a6c333da4bc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
