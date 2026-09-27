export const name="cloud-moon-light";
export const id="dl_207d42343aa748499551";
export const url=new URL("../icons/cloud-moon-light.svg?v=4b9999e8e8d47a72e897fdb69c7fbd072ce68b36c7c449347ea813de5545a765",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
