export const name="lucid_3-snowflake";
export const id="dl_e0b61b578b944c8c9876";
export const url=new URL("../icons/lucid_3-snowflake.svg?v=e2b48e2fd0a5b75db024e045fd92af4b56b6a54307c1eb12b0914d67f0f6031d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
