export const name="mail_lock-fill";
export const id="dl_e898cb937a5369b78aa7";
export const url=new URL("../icons/mail_lock-fill.svg?v=20cc96038c9b6a4f7abdbe98c6e298db2c038c0dc20b19164726d1186be82286",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
