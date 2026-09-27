export const name="not-superset-of-light";
export const id="dl_ea48be04ced442ee8de9";
export const url=new URL("../icons/not-superset-of-light.svg?v=ae0051466bdd33ab40ea5a74f37bef0c907e34cf84074cff1e46b6f36a9c6d9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
