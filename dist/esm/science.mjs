export const name="science";
export const id="dl_f92f4160329b79f4a840";
export const url=new URL("../icons/science.svg?v=dc89159f63e8c78f1029f865c6c70ee266761c0eb4af1a2ab6d73cf9ac36914f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
