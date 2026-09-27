export const name="flash_on";
export const id="dl_8685cc5231d87ab2b2eb";
export const url=new URL("../icons/flash_on.svg?v=b5f1119482ffa2f0f248a202c04463e55dd505ff95b9e4ba1b3fd6ec3a444fa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
