export const name="article-medium-thin";
export const id="dl_a85097c2b0f84b028cc8";
export const url=new URL("../icons/article-medium-thin.svg?v=f8cc3aef92e8db9672870a34bf516da27e00c4acdaf80f05e1f002209d001dea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
