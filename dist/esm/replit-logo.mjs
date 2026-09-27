export const name="replit-logo";
export const id="dl_e19d1c0afbfc4879b2a3";
export const url=new URL("../icons/replit-logo.svg?v=53f06640c16441b733565e939f2df35cf6b7ee8d2a6a95bf578d23b7720b2377",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
