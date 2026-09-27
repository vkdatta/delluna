export const name="handheld_controller-fill";
export const id="dl_f0df6cd78ed2cc5dd437";
export const url=new URL("../icons/handheld_controller-fill.svg?v=c7cad9211c7a478ae267946e7f8b3b53106978c2082e786d9e14b4b8b0adbacf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
