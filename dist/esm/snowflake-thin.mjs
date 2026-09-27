export const name="snowflake-thin";
export const id="dl_6099ff84e879aa8ea7d3";
export const url=new URL("../icons/snowflake-thin.svg?v=6c117f8f2c84a5dae2122c824798155de955285fd9c801809d6fbbf5674a60d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
