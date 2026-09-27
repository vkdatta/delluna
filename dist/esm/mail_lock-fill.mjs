export const name="mail_lock-fill";
export const id="dl_2936fe4021f07c554f24";
export const url=new URL("../icons/mail_lock-fill.svg?v=c1f7538e6ed0b469e3de32b52a977223483794732d2b0910011beb175944e240",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
