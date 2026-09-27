export const name="baseball-cap-light";
export const id="dl_5776efb08fa74badaa24";
export const url=new URL("../icons/baseball-cap-light.svg?v=11451d5285260a88872b2f311ad9d1de20b9a7ee3ed377bbe5f5efb96f609e16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
