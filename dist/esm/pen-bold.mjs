export const name="pen-bold";
export const id="dl_9ff7a927c58c4ea4a6ea";
export const url=new URL("../icons/pen-bold.svg?v=a0d3ce9f550dba39c2c602b2cfcdd0e109872302be3664dd85839f7fffd6610f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
