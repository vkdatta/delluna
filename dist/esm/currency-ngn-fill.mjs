export const name="currency-ngn-fill";
export const id="dl_3bbe62859d69453f8e22";
export const url=new URL("../icons/currency-ngn-fill.svg?v=73018072466fe5f43c38f767149c04e271a816aafdd5b422ef66323e5306682a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
