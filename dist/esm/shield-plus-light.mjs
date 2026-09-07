export const name="shield-plus-light";
export const id="dl_05d30489b77a4a34ab08";
export const url=new URL("../icons/S/shield-plus-light.svg?v=fba18db2aa598581d229d37bb769490b7c8b8cb24800bfbc96601be88ab2260f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
