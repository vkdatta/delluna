export const name="elevator-light";
export const id="dl_854a3e3c2c30439ca3db";
export const url=new URL("../icons/elevator-light.svg?v=bb41850f580a7c9654bfefe06e8733058714da2dddfd222e2fa20339d283b27b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
