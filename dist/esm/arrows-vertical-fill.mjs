export const name="arrows-vertical-fill";
export const id="dl_e1e1a1343035406bb628";
export const url=new URL("../icons/arrows-vertical-fill.svg?v=4342d1d45b3c387261dfaa9d62f6a6ad36ef9bc24dbf663bc2a38146b1ac9e11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
