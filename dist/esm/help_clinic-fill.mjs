export const name="help_clinic-fill";
export const id="dl_b9a98c7c590d3f883bf1";
export const url=new URL("../icons/help_clinic-fill.svg?v=283a6bf4c26c31a4bfe0aaa5c3d60bc6fa678fdc2b4da3a865bf6fd800133310",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
