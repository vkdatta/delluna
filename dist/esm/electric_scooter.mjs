export const name="electric_scooter";
export const id="dl_29be87b8e66454858eae";
export const url=new URL("../icons/electric_scooter.svg?v=8c998f5e4228037619fddb9941b893b75328327c0afc638251f6812bd5540dd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
