export const name="south_america-fill";
export const id="dl_bbadb96f1d63a5b28e78";
export const url=new URL("../icons/south_america-fill.svg?v=a54e7ecb3cc8f67b6d97912b6fca711139bff081b1b6a133969dde953e8cf51d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
