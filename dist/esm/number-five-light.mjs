export const name="number-five-light";
export const id="dl_de5a6ed1220a4744bf57";
export const url=new URL("../icons/number-five-light.svg?v=69dc63366fe562ccdc4f00fb41a4bceb2b7f7f61c7664c085211a56e1de42ac7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
