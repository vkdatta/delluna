export const name="strategy-duotone";
export const id="dl_ea0b0656757f7a89ff99";
export const url=new URL("../icons/strategy-duotone.svg?v=ad6be93995a5dc8382f9a4d0a2a8fc0034f042cee0b4f89fac09983fe0a317ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
