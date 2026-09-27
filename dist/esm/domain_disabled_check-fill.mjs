export const name="domain_disabled_check-fill";
export const id="dl_f91490cdb0c28f9b170b";
export const url=new URL("../icons/domain_disabled_check-fill.svg?v=835af5b295d9bbe4cdec8e892008162f988b452cfb46099062db94782b401c7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
