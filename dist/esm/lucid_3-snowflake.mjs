export const name="lucid_3-snowflake";
export const id="dl_e0b61b578b944c8c9876";
export const url=new URL("../icons/lucid_3-snowflake.svg?v=9308152e4cf6415f6e043e75a57d7fe4f6cb00b8273fc03df628e1e1224175c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
