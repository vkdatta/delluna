export const name="newspaper-clipping-thin";
export const id="dl_0ef3fb5ff0be4f1fbca5";
export const url=new URL("../icons/newspaper-clipping-thin.svg?v=8a38304d00c19332242a80e11168818006f5e598188630087a6903b10d7c867c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
