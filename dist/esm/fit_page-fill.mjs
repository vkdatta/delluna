export const name="fit_page-fill";
export const id="dl_8a9bae00e2c34040addd";
export const url=new URL("../icons/F/fit_page-fill.svg?v=a185ca359710246a682d0387944699f40ca235bf0550de11612d929e3714df34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
