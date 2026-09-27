export const name="rug-duotone";
export const id="dl_bb07e13596794ba5b213";
export const url=new URL("../icons/rug-duotone.svg?v=e08bc118a242160e9c162c9b0c3c7b829d0de3cdcddc1e7cc00ff68eeb478b32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
