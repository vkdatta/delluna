export const name="assignment-fill";
export const id="dl_2a0f934fd2e84e9dc800";
export const url=new URL("../icons/assignment-fill.svg?v=2b4bc4046f46e705e7a761e44400ed92c7061dd6a02988c46248b6042d12bb13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
