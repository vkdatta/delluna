export const name="tractor";
export const id="dl_dbdbf1fa60974897a24a";
export const url=new URL("../icons/tractor.svg?v=56321b588863c736256d3c4cb9f2cae7f987f3332de49b8e1f1086128be4ea77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
