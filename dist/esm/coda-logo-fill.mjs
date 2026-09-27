export const name="coda-logo-fill";
export const id="dl_2aea9dc573a14bfeae3f";
export const url=new URL("../icons/coda-logo-fill.svg?v=709f820a8cf570aa2f64d4a722df1e86c2bf985a6acc66be4a398fd0877426dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
