export const name="shield-plus-duotone";
export const id="dl_8ab6c415986860c6ffb0";
export const url=new URL("../icons/shield-plus-duotone.svg?v=7bd105bd3de4583dcc4424cace83b6157fcb99966144e0520fa615ea2e1f1180",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
