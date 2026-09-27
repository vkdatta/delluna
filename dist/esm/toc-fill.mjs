export const name="toc-fill";
export const id="dl_43491418b5a4ba94392b";
export const url=new URL("../icons/toc-fill.svg?v=04c90345d25719af6a53c15b3d1f6b8fde3806d3b893f192bee1f93d7801341e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
