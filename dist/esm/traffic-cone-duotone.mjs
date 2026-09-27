export const name="traffic-cone-duotone";
export const id="dl_a138aa36fa6d945b9acc";
export const url=new URL("../icons/traffic-cone-duotone.svg?v=1f8aad8a4e28dbdaab005d2e518bc5066ff689bb9fd63a92533d06c4462be6a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
