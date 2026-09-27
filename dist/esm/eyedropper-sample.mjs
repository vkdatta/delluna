export const name="eyedropper-sample";
export const id="dl_c3cfcf647b9442c0a786";
export const url=new URL("../icons/eyedropper-sample.svg?v=24681ca7450e98365d3eec2fce694e04ec8ec5c2704a0228c8da8c0a91b2ac8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
