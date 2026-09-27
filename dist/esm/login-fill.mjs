export const name="login-fill";
export const id="dl_170afaec65df911dc230";
export const url=new URL("../icons/login-fill.svg?v=ba7849aadb693b4370f5485f7f7023e7704f940da5c370eebe675a0a2e226ec9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
