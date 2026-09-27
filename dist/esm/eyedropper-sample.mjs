export const name="eyedropper-sample";
export const id="dl_c3cfcf647b9442c0a786";
export const url=new URL("../icons/eyedropper-sample.svg?v=6c99b1d3832437b90af848c7bea598fe64fc397066eacafe07523b126e66bdfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
