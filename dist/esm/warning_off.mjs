export const name="warning_off";
export const id="dl_e6aad50cdc9b8c23766f";
export const url=new URL("../icons/warning_off.svg?v=ec1db3efa2647164df9a34683527c79db7be98493104fc37ad00717000be1c85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
