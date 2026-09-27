export const name="enterprise_off-fill";
export const id="dl_fd295b5191d99ad4148d";
export const url=new URL("../icons/enterprise_off-fill.svg?v=7f01c3b21e75d9da68dad79adc098f9e54817671dbd3caec8ce09a28dedc056e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
