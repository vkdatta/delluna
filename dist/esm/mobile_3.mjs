export const name="mobile_3";
export const id="dl_54c9db878a46dafc3271";
export const url=new URL("../icons/mobile_3.svg?v=ba6c517d9efda8ed8d437744c6ba36c2ab9dcddb7d077d39551d41f821ebc01b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
