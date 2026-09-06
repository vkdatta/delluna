export const name="cube-light";
export const id="dl_4579d6932fb5486c88d6";
export const url=new URL("../icons/cube-light.svg?v=9033bbc10da4b96f0f878516703556e174a4514117c5322efca024178aa39f92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
