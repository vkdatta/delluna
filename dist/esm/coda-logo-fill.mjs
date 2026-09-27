export const name="coda-logo-fill";
export const id="dl_2aea9dc573a14bfeae3f";
export const url=new URL("../icons/coda-logo-fill.svg?v=f8034a52e8a45daacf161d237aeea85bdfdef60e232ac348efd7de23a754f4f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
