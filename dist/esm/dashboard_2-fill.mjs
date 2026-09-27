export const name="dashboard_2-fill";
export const id="dl_239e0c6d373355770ced";
export const url=new URL("../icons/dashboard_2-fill.svg?v=77961da74bb448149962c53531c0f696f39571067dede7e7bf5a53bbb27bafcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
