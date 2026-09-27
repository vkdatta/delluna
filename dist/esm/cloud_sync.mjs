export const name="cloud_sync";
export const id="dl_49656f914d96fa24abdc";
export const url=new URL("../icons/cloud_sync.svg?v=fb754edd0d9373f7c87fc91f714d14a610cd2a533fc17656887f7f972157cdc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
