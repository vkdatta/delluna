export const name="home_mini-fill";
export const id="dl_dc10c0ad3bcd2577ec30";
export const url=new URL("../icons/home_mini-fill.svg?v=10be60e284a3d17e926ca7766e98f0a135daca29d309d629316191836ee4af40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
