export const name="phone-outgoing-light";
export const id="dl_7d9c69b495b141da8e54";
export const url=new URL("../icons/phone-outgoing-light.svg?v=fe875de673f2f02e8bd5922dc1e32128dda201aabaf591b613d97fa90bef8778",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
