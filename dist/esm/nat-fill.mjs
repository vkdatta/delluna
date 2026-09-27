export const name="nat-fill";
export const id="dl_a0ebef5718b214dfa2f6";
export const url=new URL("../icons/nat-fill.svg?v=9b5407df5f82a9bd8fe45b413f64b19dcbb5c1934a0c5a3171a9b7b0180a204b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
