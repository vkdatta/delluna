export const name="unfold_more-fill";
export const id="dl_6ffee0e96e356dcfd0dd";
export const url=new URL("../icons/unfold_more-fill.svg?v=cc14c5f63ff036493ff372e60db0a3b038ac44b3b40622d7849102682499dc2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
