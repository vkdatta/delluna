export const name="text-align-center-fill";
export const id="dl_f990a77bb80d5fcb61c4";
export const url=new URL("../icons/text-align-center-fill.svg?v=8a421ca6c58284451e507b827fc6c24fcddd238ac2da54ee6d754aec88e226c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
