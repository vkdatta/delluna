export const name="luggage";
export const id="dl_109f0d49ad9346599046";
export const url=new URL("../icons/luggage.svg?v=bbd178f107f9ddaf0324690ec93eb86a813d9568cfc1f78f64badefac6e05e78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
