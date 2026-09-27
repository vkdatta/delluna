export const name="lucid_3-message-square-warning";
export const id="dl_1eb59017d35742289f77";
export const url=new URL("../icons/lucid_3-message-square-warning.svg?v=c7725f6d1f1e694984fac2a3044d8030795e617cbb93732a2e048dc15c31519d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
