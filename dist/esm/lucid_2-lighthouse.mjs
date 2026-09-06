export const name="lucid_2-lighthouse";
export const id="dl_272d129408174198a85a";
export const url=new URL("../icons/lucid_2-lighthouse.svg?v=42c03c9b1f921ba3baebddea203d9463c875b07eace482435feab26f970801b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
