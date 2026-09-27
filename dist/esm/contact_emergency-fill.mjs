export const name="contact_emergency-fill";
export const id="dl_c7551a0060c34e800612";
export const url=new URL("../icons/contact_emergency-fill.svg?v=72a956dc28ac142bff724d91aef68142873f0f87b916370e736835100851b907",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
