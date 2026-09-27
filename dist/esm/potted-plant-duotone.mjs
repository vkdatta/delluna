export const name="potted-plant-duotone";
export const id="dl_0caff1ed4a1d454f8317";
export const url=new URL("../icons/potted-plant-duotone.svg?v=611133dae34ec85bf948a093c59b64239c447aee6540f2b06d5f1d87bea1339e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
