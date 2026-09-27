export const name="nest_secure_alarm-fill";
export const id="dl_85d381f12b53b3f6437e";
export const url=new URL("../icons/nest_secure_alarm-fill.svg?v=bca0dc78c035345d87f43bef71f3659e5a76f42dbb4856e7f95866237bd89b88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
