export const name="medal-military";
export const id="dl_211b4f001fde4e2da0d7";
export const url=new URL("../icons/medal-military.svg?v=cc662ff894f2a7946ee3e73e0bdb69f720b81f06100ea92ccaae72e06986aa9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
