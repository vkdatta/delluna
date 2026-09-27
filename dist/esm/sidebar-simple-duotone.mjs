export const name="sidebar-simple-duotone";
export const id="dl_23b49b7589b9d1783eb6";
export const url=new URL("../icons/sidebar-simple-duotone.svg?v=7b23c859cee86dec8913c8d9fda9b4f20e2e43f5d5f5d7043b87f0a3cc9ca7e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
