export const name="chess_bishop-fill";
export const id="dl_3949a8c1e5bf47828b87";
export const url=new URL("../icons/C/chess_bishop-fill.svg?v=d0b59fb8c0966e78374f506c97591d2d0a857e2842c4b1dfa279bf5eaee29978",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
