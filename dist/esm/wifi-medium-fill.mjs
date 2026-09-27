export const name="wifi-medium-fill";
export const id="dl_9e39f4e91230f7eb4c0f";
export const url=new URL("../icons/wifi-medium-fill.svg?v=bb5c08f21926a9bc99ed6bb95cf43df38d228d2031914dda5bfc4591c7d6c54a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
