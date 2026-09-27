export const name="tipi-thin";
export const id="dl_88162146c3815fcc8197";
export const url=new URL("../icons/tipi-thin.svg?v=fa637a974d719f364edf653dc16afafe739e5f550a4ea103fc09cf59017ceacf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
