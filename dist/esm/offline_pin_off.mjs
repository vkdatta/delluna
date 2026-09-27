export const name="offline_pin_off";
export const id="dl_b849c9deb35c8a0894b4";
export const url=new URL("../icons/offline_pin_off.svg?v=6093b7e05ee2458826630e8701ef159865e4d05d51d1f2ac22be0af429d813e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
