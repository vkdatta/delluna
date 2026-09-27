export const name="lucid_1-circle-pile";
export const id="dl_1bbe95d436f14429aa50";
export const url=new URL("../icons/lucid_1-circle-pile.svg?v=739400d0a615b6080593b9143c34075e3c6544c2e75514cdc485795f27d0012a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
