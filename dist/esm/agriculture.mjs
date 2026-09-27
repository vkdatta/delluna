export const name="agriculture";
export const id="dl_c0fdedb269c03e1130d5";
export const url=new URL("../icons/agriculture.svg?v=b1d5a8e1434f301c65564679c39113ae48b88b2304d9a41267558fb9dcdc1c5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
