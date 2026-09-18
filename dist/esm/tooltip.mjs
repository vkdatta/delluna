export const name="tooltip";
export const id="dl_e011bbd3306b407ebe5b";
export const url=new URL("../icons/tooltip.svg?v=cc172537961bcbe6724a7965dc12aedc90212a2f8fa62d53cc1b6055c8864381",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
