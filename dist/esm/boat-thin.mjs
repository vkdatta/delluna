export const name="boat-thin";
export const id="dl_b024fc8772ae4550a1cb";
export const url=new URL("../icons/boat-thin.svg?v=353211ec1729c1acd5e6a6ca685b516a2cf517a34d0fa0f4465ae0648b10148a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
