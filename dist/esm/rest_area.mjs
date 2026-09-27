export const name="rest_area";
export const id="dl_d3834a93af46e0692fe2";
export const url=new URL("../icons/rest_area.svg?v=2a3f0ccc31a8af143e8c20bd037f3c98860ff7eb8be2173c04131081b6398953",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
