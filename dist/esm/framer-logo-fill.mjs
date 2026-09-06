export const name="framer-logo-fill";
export const id="dl_f2e26a854bb24a38a7a1";
export const url=new URL("../icons/framer-logo-fill.svg?v=fa684686b3e3ab24cafa5ee68e7c8d138cf14548a997eae9f4e3baf6e1d108b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
