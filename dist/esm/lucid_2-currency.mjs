export const name="lucid_2-currency";
export const id="dl_4d049a85922745c0b611";
export const url=new URL("../icons/lucid_2-currency.svg?v=86bf888f22b52ed9afb80c534953a50bd3eca4d7f748258ada165f3ba112f4a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
