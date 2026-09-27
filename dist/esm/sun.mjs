export const name="sun";
export const id="dl_7f19997f2c88d6f1577a";
export const url=new URL("../icons/sun.svg?v=46002b4cd0dfaf307db36a2b604e66d690459cbb228f282f3bac43f2a8d1e721",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
