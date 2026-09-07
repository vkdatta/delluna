export const name="cloud-moon";
export const id="dl_e46ee834d42f4261a43c";
export const url=new URL("../icons/cloud-moon.svg?v=c2630f78c90bebfb9114565b239f5752de0499e639289a33f08095121da329b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
