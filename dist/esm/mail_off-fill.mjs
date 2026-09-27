export const name="mail_off-fill";
export const id="dl_d845526e882b80658cde";
export const url=new URL("../icons/mail_off-fill.svg?v=f391193ef52b4333f0f1115c35c922db9dfe5ee79cd33e01fb88f878a001e27d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
