export const name="wifi_tethering-fill";
export const id="dl_7f91cfca4a8d4d598fda";
export const url=new URL("../icons/wifi_tethering-fill.svg?v=615f660f4c73aa0427a3a17cc234cde26cb3a2b8ed7e8d392108c2fda87d174c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
