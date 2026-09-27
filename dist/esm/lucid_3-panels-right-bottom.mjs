export const name="lucid_3-panels-right-bottom";
export const id="dl_eca2b1a7179e4bd7a2b1";
export const url=new URL("../icons/lucid_3-panels-right-bottom.svg?v=38de03f3fa49932b93a79178fb6ca5d714c739218e3facd13be4ecf95236df76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
