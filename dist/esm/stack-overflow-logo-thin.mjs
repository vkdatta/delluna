export const name="stack-overflow-logo-thin";
export const id="dl_0c7df23b6f7d41598fbe";
export const url=new URL("../icons/S/stack-overflow-logo-thin.svg?v=51c006db43f77dce695f763b7c3269aa641c30a9bc063943c74db42cf87a7f61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
