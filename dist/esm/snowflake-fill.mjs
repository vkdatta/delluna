export const name="snowflake-fill";
export const id="dl_ae52ef2b34824799b023";
export const url=new URL("../icons/S/snowflake-fill.svg?v=d24670222e7adfeb1f6d3c1de655a00e01d5095975043566b95a2981ff695f60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
