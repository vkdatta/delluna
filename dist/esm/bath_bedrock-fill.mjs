export const name="bath_bedrock-fill";
export const id="dl_60dcd910698a48758755";
export const url=new URL("../icons/B/bath_bedrock-fill.svg?v=a2c2e1f69e7c76c88a0e1016a893cb3ed2293beee9aa6f1ef5e038b1e5b518b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
