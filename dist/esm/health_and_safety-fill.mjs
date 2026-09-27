export const name="health_and_safety-fill";
export const id="dl_0e09c08675c651f6e6ea";
export const url=new URL("../icons/health_and_safety-fill.svg?v=433a9968d0ddae24901d7ac556fdb5f84a6f14ca772a9058534645f1527fdefd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
