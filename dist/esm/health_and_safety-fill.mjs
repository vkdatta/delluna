export const name="health_and_safety-fill";
export const id="dl_c5be4692b87ced2d519a";
export const url=new URL("../icons/health_and_safety-fill.svg?v=eba82d5ba8e3691b8aec05e76f21dd36b4be7d274bd0bfd2cb2b917c56fad6ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
