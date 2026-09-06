export const name="gender-intersex-fill";
export const id="dl_ca64f4e7646e4326aadb";
export const url=new URL("../icons/gender-intersex-fill.svg?v=5f796a383a3f67850e8ee8c79cb4432d749b51464220a7fca32091cd9424c294",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
