export const name="pencil-circle-thin";
export const id="dl_0f54d8b9d39d47e39e05";
export const url=new URL("../icons/pencil-circle-thin.svg?v=8640364973ee17ea93d6e34245e855b68572ab594d0c651595d9c2d6a34d4667",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
