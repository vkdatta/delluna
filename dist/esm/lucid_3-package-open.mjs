export const name="lucid_3-package-open";
export const id="dl_c9491e129ef54a57ad5a";
export const url=new URL("../icons/lucid_3-package-open.svg?v=f88f872cc95d299a979ca5cb38d04859a283598aa3dffef615e9521318841bd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
