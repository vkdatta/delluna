export const name="reset_white_balance-fill";
export const id="dl_81467b0f575e58259968";
export const url=new URL("../icons/reset_white_balance-fill.svg?v=f579b70d8580c2d5c175abbf58c154dc07df31cb29e8c4deee21b6875ebde422",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
