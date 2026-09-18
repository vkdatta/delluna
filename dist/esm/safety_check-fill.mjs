export const name="safety_check-fill";
export const id="dl_0a7c91fa39cf410aaf8c";
export const url=new URL("../icons/S/safety_check-fill.svg?v=c2ba3a0370d9d3959fa67066c614f2a988e6c99bbff390939927bc9ee81c0ef6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
