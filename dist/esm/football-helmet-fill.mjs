export const name="football-helmet-fill";
export const id="dl_db3590c464694d409af9";
export const url=new URL("../icons/football-helmet-fill.svg?v=7480bd58fd51a195efa752f52abeea4126ab1542123f60b1d48ff0ce4ca0699e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
