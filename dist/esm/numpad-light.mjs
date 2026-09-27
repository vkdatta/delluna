export const name="numpad-light";
export const id="dl_663f9524b7f849a6af2e";
export const url=new URL("../icons/numpad-light.svg?v=d09180f61a6a7a092729d2166d183d6dc13b99dcd9d6321a4d397ab228980230",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
