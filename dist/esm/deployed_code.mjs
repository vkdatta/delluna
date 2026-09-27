export const name="deployed_code";
export const id="dl_77c9a71f95b25064e3b6";
export const url=new URL("../icons/deployed_code.svg?v=82d8fb95540c98f91d211ee931f8eaeaf388431f4983978ded2d3418f035ed5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
