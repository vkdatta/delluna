export const name="nest_eco_leaf-fill";
export const id="dl_cdf457c6f4b5f222413e";
export const url=new URL("../icons/nest_eco_leaf-fill.svg?v=1273427458613c5e6c2987f4bffd7601cdd729938bb475f1422a8573d999e712",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
