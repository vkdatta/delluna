export const name="speaker-hifi-duotone";
export const id="dl_9b8dee224d3c85463f31";
export const url=new URL("../icons/speaker-hifi-duotone.svg?v=88822dc9bffb20f5175a2b1ded03b923ebc6a000fabc2b7893e7ce2a8fadf5a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
