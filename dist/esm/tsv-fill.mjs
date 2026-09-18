export const name="tsv-fill";
export const id="dl_d68b34b3434849a7974b";
export const url=new URL("../icons/tsv-fill.svg?v=83ae79e69ba36ffe92fdc6df82c558862b31e5ca2f2182e5e2a6fe018123648e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
