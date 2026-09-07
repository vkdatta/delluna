export const name="paper-plane-right-duotone";
export const id="dl_96a99dfb9b0749f6b773";
export const url=new URL("../icons/paper-plane-right-duotone.svg?v=92bd08789a9b4dd3abc718967d9a71ca090c259795b293bc4317ace0c7caa992",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
