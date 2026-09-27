export const name="lightbulb_2";
export const id="dl_1e118f5eac9e82800088";
export const url=new URL("../icons/lightbulb_2.svg?v=cf4e3231f4ebb7558eb164ffbb60bcd332fa0e83155030326831a6f4d520067e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
