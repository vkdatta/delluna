export const name="steps-bold";
export const id="dl_ebf9911899df5379b4cb";
export const url=new URL("../icons/steps-bold.svg?v=28a170127fc94b14739589b1878f7d930852f4f75b70b532ee510ce8575e4749",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
