export const name="math-operations-bold";
export const id="dl_5f4ca9dd2fae4342bda8";
export const url=new URL("../icons/math-operations-bold.svg?v=ae3fb6add4fd05f161746e4a433d801aee6f321d6de0d66dbfbd19f755f7e12c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
