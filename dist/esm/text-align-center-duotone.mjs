export const name="text-align-center-duotone";
export const id="dl_a73a80f6bb34b970d766";
export const url=new URL("../icons/text-align-center-duotone.svg?v=9fd47f26aa81ce0f2fc25cec953b6e1ae412361ba37f234c4bec0c5bf6a43063",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
