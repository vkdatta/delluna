export const name="18mp-fill";
export const id="dl_d4bc9debf1c757643c96";
export const url=new URL("../icons/18mp-fill.svg?v=b25a1307506995a33256c698f2e7f54373e55748edf634167ea3e843f7099145",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
