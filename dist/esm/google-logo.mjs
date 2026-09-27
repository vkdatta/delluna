export const name="google-logo";
export const id="dl_d35e518ea63b4ce8acca";
export const url=new URL("../icons/google-logo.svg?v=88df0628a569b85e25f8b6de2e1086025ec86ba6010d3fd3e376ee7fde9cc00e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
