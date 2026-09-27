export const name="skype-logo-thin";
export const id="dl_1eda1f08011ca90cab72";
export const url=new URL("../icons/skype-logo-thin.svg?v=0eb821058e75229be12580e1c22514a1bac90c1df1eef10c3e49bfb1f500ad0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
