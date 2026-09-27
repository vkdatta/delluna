export const name="file-lock-fill";
export const id="dl_35d0342916304385bd56";
export const url=new URL("../icons/file-lock-fill.svg?v=92b7c7a5fb0ab0cf8459c3db340239996e2b052f7542207e01f5f530429809fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
