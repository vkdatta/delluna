export const name="call-bell";
export const id="dl_9f820a7f57044933b51f";
export const url=new URL("../icons/call-bell.svg?v=8e34fed4e0c7462add464ed9f3a73f6bacabe18509353beac85ef88ef5b42a59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
