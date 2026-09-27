export const name="lucid_1-contact";
export const id="dl_cf20d49fffc44176a053";
export const url=new URL("../icons/lucid_1-contact.svg?v=5fda298816d3f3784fe99fad0392ea97a8be33a45877b0b7f990582c41c5e5ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
