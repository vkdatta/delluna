export const name="megaphone-fill";
export const id="dl_ffe64943cb804b619eb5";
export const url=new URL("../icons/megaphone-fill.svg?v=e0d7d1199a6dd6538eff4dc6d8c557ad7cc6092be99db3412c670b15c97ab506",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
