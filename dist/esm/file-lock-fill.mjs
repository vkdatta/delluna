export const name="file-lock-fill";
export const id="dl_35d0342916304385bd56";
export const url=new URL("../icons/file-lock-fill.svg?v=4c2ed1a9ca2b6bbcdd976dbd1be09177a4606a6bed2a957123e2c5b19872dabf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
