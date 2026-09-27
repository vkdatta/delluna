export const name="windshield_defrost_rear";
export const id="dl_f5fea1e7eeecffbe1284";
export const url=new URL("../icons/windshield_defrost_rear.svg?v=e415c2ec82e2b8dffd146e3edc8a2a0a2c3e155b7bee8da090f9107a52f798eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
