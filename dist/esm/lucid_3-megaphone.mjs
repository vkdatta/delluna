export const name="lucid_3-megaphone";
export const id="dl_d42799d345aa42f28a4e";
export const url=new URL("../icons/lucid_3-megaphone.svg?v=1376557aa3b8f7de0125072a1199ff3dc9ecd4e88a94c41e6c7de55a19690a3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
