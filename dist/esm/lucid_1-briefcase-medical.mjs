export const name="lucid_1-briefcase-medical";
export const id="dl_a95ba20142a74707b827";
export const url=new URL("../icons/lucid_1-briefcase-medical.svg?v=e1c247b7d9195eb626a8f11084d8dc759f1b0ef8d32e8347c9db15cdc2b07b9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
