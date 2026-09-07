export const name="cpu-thin";
export const id="dl_18ebb583ed224b979177";
export const url=new URL("../icons/cpu-thin.svg?v=8def0de4301da401063153f7d5c0a3751d0b43336ad238a845bcf6d8cda91417",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
