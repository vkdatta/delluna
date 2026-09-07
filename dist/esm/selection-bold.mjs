export const name="selection-bold";
export const id="dl_fc9bb849dfed4a98b814";
export const url=new URL("../icons/S/selection-bold.svg?v=bca7ab4688ca03ed591ba3cfba90bda277b25596b649898388c51aebc7742fb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
