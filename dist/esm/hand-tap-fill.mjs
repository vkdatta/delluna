export const name="hand-tap-fill";
export const id="dl_e2e35716444f48bf895f";
export const url=new URL("../icons/hand-tap-fill.svg?v=e914eca783fbd4373036a391ca970b135588820145794cc4d0310e50caf972df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
