export const name="sidebar-duotone";
export const id="dl_7ea4ece51cfd4bf59f9e";
export const url=new URL("../icons/S/sidebar-duotone.svg?v=39e231ed6a94dfeb8face1559e5052a4ae5ff4ac5676fac633b51fde42b12d7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
