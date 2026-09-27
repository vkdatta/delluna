export const name="mail_off";
export const id="dl_450e7d6bea07105a73cf";
export const url=new URL("../icons/mail_off.svg?v=f8896519f6c353e5aace7ccf45a79d3e5dfb283ef709256d0dcf28a2bb784180",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
