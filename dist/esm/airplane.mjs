export const name="airplane";
export const id="dl_a7997e874b5343fbb2ba";
export const url=new URL("../icons/airplane.svg?v=994c490f47f61ab5e61889c2b451e95552d333299b5eb4cbf02c9e6d875f27b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
