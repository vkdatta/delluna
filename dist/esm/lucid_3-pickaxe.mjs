export const name="lucid_3-pickaxe";
export const id="dl_4c0066806a144c98be90";
export const url=new URL("../icons/lucid_3-pickaxe.svg?v=8e54820ee0aff1b4d8d6ed2139302383e6d173218992dbf8f0d907ae9aeaedcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
