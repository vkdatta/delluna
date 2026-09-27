export const name="snowflake-thin";
export const id="dl_1878a7c85ef5c57bb819";
export const url=new URL("../icons/snowflake-thin.svg?v=179341de27c32e6282210f59d5f687b9f77f3b6a207b52177ec476d681f65598",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
