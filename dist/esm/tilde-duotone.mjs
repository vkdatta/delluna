export const name="tilde-duotone";
export const id="dl_40a6c1b2f50660b49bae";
export const url=new URL("../icons/tilde-duotone.svg?v=26af98eedd5682815157a51b27681424dde1fc875a15e6378f0890f449a1f2b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
