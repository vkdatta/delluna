export const name="spellcheck-fill";
export const id="dl_594cf71f77b3840c6e84";
export const url=new URL("../icons/spellcheck-fill.svg?v=c1518a84d1faabe7fc095d3580e16ad2498674950bf5dfccc3f0401b54c913e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
