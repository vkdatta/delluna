export const name="bath_outdoor-fill";
export const id="dl_cbec67b29d404f25686b";
export const url=new URL("../icons/bath_outdoor-fill.svg?v=c6162b047740cdc6c6de97a7ca2f0c65f9bff10365fbdf33d4a9d58074c29096",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
