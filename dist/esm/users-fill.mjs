export const name="users-fill";
export const id="dl_64ad34a14ce4d468e319";
export const url=new URL("../icons/users-fill.svg?v=e95a433549c552238a6adc62bfc1b0c1b2cd054bcdb7cd9d0e680b6b9ae88fee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
