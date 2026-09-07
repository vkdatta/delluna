export const name="rewind-thin";
export const id="dl_d346a13e98c6453fa2e2";
export const url=new URL("../icons/rewind-thin.svg?v=fb5ebda1d09b3410bcdf15f7a9fe1b6f7efbbdb435d6857cf6d66096a973b61e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
