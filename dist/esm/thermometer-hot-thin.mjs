export const name="thermometer-hot-thin";
export const id="dl_d69605816306cb01d9a0";
export const url=new URL("../icons/thermometer-hot-thin.svg?v=8fc6ccf422d7033ef76f80f6d7a59d8e2b9193ea81012d4da91b7af5aee1737c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
