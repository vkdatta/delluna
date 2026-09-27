export const name="spade";
export const id="dl_e7835b22e58099fbb3a4";
export const url=new URL("../icons/spade.svg?v=ef1ed93f6d192bf5b2c947f63879f0751ef86605f733b3a2a571801faa24246a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
