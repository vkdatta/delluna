export const name="lucid_3-package-open";
export const id="dl_c9491e129ef54a57ad5a";
export const url=new URL("../icons/lucid_3-package-open.svg?v=0e70d193363df7b770e37912bba6e37dc4b6957f198ba8356f3768f743b49a01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
