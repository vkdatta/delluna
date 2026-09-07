export const name="lucid_1-cloud-check";
export const id="dl_2b3afa16cb0449db8937";
export const url=new URL("../icons/lucid_1-cloud-check.svg?v=31d1ede269b181515eb48ee54257e396f2c15fff7f65a2838a926745691fe85c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
