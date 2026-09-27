export const name="snowflake-bold";
export const id="dl_7a9922d2fa4f9c117ff2";
export const url=new URL("../icons/snowflake-bold.svg?v=6c657f5ca1ddb33a2e23e038feaa8730d178f867d994d49124aa827618e2145d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
