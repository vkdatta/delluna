export const name="lucid_2-database-zap";
export const id="dl_ff944eb99d1e4efca2c6";
export const url=new URL("../icons/lucid_2-database-zap.svg?v=399e488ded19cb0429e18b72025bb87867c91e32b9d9a47fb8c4d96d327c691b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
