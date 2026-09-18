export const name="space_dashboard";
export const id="dl_28c2a309974e4be8b00f";
export const url=new URL("../icons/space_dashboard.svg?v=d3638af45a69dee66466d8d7b49b0de3c903a7c85cc63fcc3cda57fdc1f795f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
