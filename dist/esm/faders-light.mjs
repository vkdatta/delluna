export const name="faders-light";
export const id="dl_7f619f1d5cb44850983e";
export const url=new URL("../icons/faders-light.svg?v=f7d62b02b68eae07fa184027fe7f7f7da67de0d97c4e183b571e5a28471621c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
