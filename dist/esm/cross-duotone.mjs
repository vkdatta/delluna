export const name="cross-duotone";
export const id="dl_c3adbfbc9094406a80d4";
export const url=new URL("../icons/cross-duotone.svg?v=36ab652f01853b625e853184b2036852991960103e7dfbc4ca11447befc839a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
