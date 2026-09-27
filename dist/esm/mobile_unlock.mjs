export const name="mobile_unlock";
export const id="dl_a56e7548f84f8a7d6241";
export const url=new URL("../icons/mobile_unlock.svg?v=84ca807e5452caba3285b71319be7d0fe978fe466c05633dfb3b5dfc6280d326",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
