export const name="simulation";
export const id="dl_95fe9efd368b4a128506";
export const url=new URL("../icons/simulation.svg?v=b9dd9e05013aabba8d89f1acac82be17b62c66324f634cf56d8aa4abf1b32d72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
