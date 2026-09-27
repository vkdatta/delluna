export const name="bridge-fill";
export const id="dl_3cd9bccf651645efa548";
export const url=new URL("../icons/bridge-fill.svg?v=0565a3b02d208a80957c12d6d88d8b416c11a28ff789fa5d479ad42969fcd0af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
