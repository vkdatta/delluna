export const name="seal-question-duotone";
export const id="dl_825c5710c0d314349a84";
export const url=new URL("../icons/seal-question-duotone.svg?v=a2201bb6be5063831d67f6eaa8ca84a88fd0e51fd1afee67b1f88f1058c8f7d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
