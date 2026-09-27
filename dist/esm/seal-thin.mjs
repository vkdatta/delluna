export const name="seal-thin";
export const id="dl_0e1e3cb9ccb90a782c55";
export const url=new URL("../icons/seal-thin.svg?v=2bec8b63708f7430608bf4e5e3df17217df0ed71b223d451d1430603426a9d12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
