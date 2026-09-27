export const name="animated_images";
export const id="dl_d1330cdded4c8572591b";
export const url=new URL("../icons/animated_images.svg?v=dcbe75012676609a9b5403f1848cecc4a14c03966eb5d5560de10c552a45f31e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
