export const name="dashboard";
export const id="dl_d49dc95473a4f512a721";
export const url=new URL("../icons/dashboard.svg?v=83b487f71dd3325c60820acef02759bc9fee4a8ef1eb251741bc1146b7d8616c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
