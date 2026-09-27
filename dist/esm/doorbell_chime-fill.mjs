export const name="doorbell_chime-fill";
export const id="dl_053d87bc3aeb02c7a6df";
export const url=new URL("../icons/doorbell_chime-fill.svg?v=c63298b0ddebb9f1312b4d5a4935f831adf8e8fb0526ed1aa9958e944a3afbc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
