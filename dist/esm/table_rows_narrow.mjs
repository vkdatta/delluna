export const name="table_rows_narrow";
export const id="dl_8b3aa45a483c4f9c7e86";
export const url=new URL("../icons/table_rows_narrow.svg?v=d94278a5e310daaa6c2cf3372778dc8be793deb2ff2b7420896d0a1572cdf865",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
