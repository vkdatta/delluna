export const name="nested";
export const id="dl_9f91ba49691444e4ac7d";
export const url=new URL("../icons/nested.svg?v=59ba211c61b2cadc85b1629b793b1756f48264a963756143ef968470ede4d4eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
