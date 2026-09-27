export const name="lucid_2-mail";
export const id="dl_4c21df6293a441d2bdae";
export const url=new URL("../icons/lucid_2-mail.svg?v=f21a93863a0f11611ec8defcb8831c0ded8303993e8743758fb40f50e8a2c784",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
