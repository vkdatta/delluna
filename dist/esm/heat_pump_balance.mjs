export const name="heat_pump_balance";
export const id="dl_017de8021098720dd0c2";
export const url=new URL("../icons/heat_pump_balance.svg?v=7c2b781c73561129fde7adf154f19eb0ea58ca1bf3289458590d69a220cb17a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
