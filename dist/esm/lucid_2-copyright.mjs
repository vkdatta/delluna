export const name="lucid_2-copyright";
export const id="dl_dd88cd79431f4bafad68";
export const url=new URL("../icons/lucid_2-copyright.svg?v=c4ed437817912bd1b9c417ff8a9b1f51b2d012706380b92ff6f4b4eac86d9a17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
