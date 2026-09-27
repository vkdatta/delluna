export const name="rows";
export const id="dl_7abaad558ca64f9aace5";
export const url=new URL("../icons/rows.svg?v=198de38ceea2bfbefc037563aed2319add4f66ce8249f1106315762c8f3b017d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
