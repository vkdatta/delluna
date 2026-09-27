export const name="table_eye";
export const id="dl_99d098cc54b2933b1a06";
export const url=new URL("../icons/table_eye.svg?v=73efa07a307096602e64946d3b25cd6ccffa75217581c785e9bc9f8671129d74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
