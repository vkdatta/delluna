export const name="paper-plane-fill";
export const id="dl_acd87fd173964c3c931b";
export const url=new URL("../icons/paper-plane-fill.svg?v=3a2b8ed8fd32f248cd379a060ab47353ab6dbaa8f48b2d58a516351b8c542c5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
