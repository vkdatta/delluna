export const name="deployed_code";
export const id="dl_b723ab5b3f0d47e9b92b";
export const url=new URL("../icons/D/deployed_code.svg?v=82d8fb95540c98f91d211ee931f8eaeaf388431f4983978ded2d3418f035ed5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
