export const name="present_to_all-fill";
export const id="dl_251ae30eec39a101acf6";
export const url=new URL("../icons/present_to_all-fill.svg?v=0e15b547242edb7786b83ca61c8a1c48338773fcedba77a49a7f8a9db5ac7a72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
