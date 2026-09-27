export const name="reset_brightness";
export const id="dl_3e10c04bceac86090085";
export const url=new URL("../icons/reset_brightness.svg?v=01a604e42029baed749814890e5e1db346e49efce1602f5bc4ac9c6ef859b535",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
