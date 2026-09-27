export const name="supervised_user_circle-fill";
export const id="dl_385bbdfeec985518a74a";
export const url=new URL("../icons/supervised_user_circle-fill.svg?v=e17fbb63f8d3b4e2af1d883026a077c9b75587bb4eb0798776b5ecb677058098",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
