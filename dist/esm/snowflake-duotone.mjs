export const name="snowflake-duotone";
export const id="dl_45edf410f011a0860328";
export const url=new URL("../icons/snowflake-duotone.svg?v=dee0f79e4bc443d92f046201f41109543d2bed8bb4255c1cdfbbfe691fa6258d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
