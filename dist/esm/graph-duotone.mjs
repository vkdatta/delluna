export const name="graph-duotone";
export const id="dl_f4af0a548caa4c538df5";
export const url=new URL("../icons/graph-duotone.svg?v=7fe4f8a927482d1f36545c7c42205872506037646d6464e0d85db1e30b0ba1b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
