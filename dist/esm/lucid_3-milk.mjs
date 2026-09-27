export const name="lucid_3-milk";
export const id="dl_5c187142ff9a4e37962f";
export const url=new URL("../icons/lucid_3-milk.svg?v=463796a4ed12faa11cf8b6bb16d066bc20700d16278f4e6c34cacbf9175e2074",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
