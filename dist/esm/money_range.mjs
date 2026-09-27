export const name="money_range";
export const id="dl_273dd5decb76f4a4572d";
export const url=new URL("../icons/money_range.svg?v=4a8e481dee50ec62b474b946036a61b893e35799357326112cf98d2e9d4d8194",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
