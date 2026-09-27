export const name="lucid_1-chart-bar-big";
export const id="dl_c49b44f05d314ec78a9f";
export const url=new URL("../icons/lucid_1-chart-bar-big.svg?v=a1eb32edd4d6b9db505ed345998f8385c91992198efdf9f7e2f981026db9a47e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
