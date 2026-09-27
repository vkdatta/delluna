export const name="drop-simple-fill";
export const id="dl_c4fe71fcafa548c99ade";
export const url=new URL("../icons/drop-simple-fill.svg?v=ca940342bbcafaf212f78b80f8b0221cbf54320d53c53e3bd01ac9ea4db2493d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
