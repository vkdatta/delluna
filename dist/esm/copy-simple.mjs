export const name="copy-simple";
export const id="dl_18ddb474456f4f93aae9";
export const url=new URL("../icons/copy-simple.svg?v=c64b5999053ed161a41505fc5e0f64e37f2fa24ba124c91ddff31e0378a3c14e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
