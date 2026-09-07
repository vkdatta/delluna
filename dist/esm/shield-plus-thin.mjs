export const name="shield-plus-thin";
export const id="dl_01685048bf694e779fb4";
export const url=new URL("../icons/S/shield-plus-thin.svg?v=9650becb60bf67c01ff86396a1806e1e325c50905921c23c48a48a1de44f1afd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
