export const name="mode_fan-fill";
export const id="dl_4c93b8c5e0450f3b74aa";
export const url=new URL("../icons/mode_fan-fill.svg?v=75dd7871fc42638eb671cbd96c28791b6f6094f0bddfa0a6ecb96dd8b5d4ddc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
