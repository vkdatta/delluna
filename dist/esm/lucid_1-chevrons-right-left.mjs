export const name="lucid_1-chevrons-right-left";
export const id="dl_05275c933dfc4370b152";
export const url=new URL("../icons/lucid_1-chevrons-right-left.svg?v=d54bda36f604c2e4725ae30f72dba92047a830c1fa6a2a20822f00f3bc279a6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
