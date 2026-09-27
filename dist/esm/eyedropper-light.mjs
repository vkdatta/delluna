export const name="eyedropper-light";
export const id="dl_d3fcec97871e416fab84";
export const url=new URL("../icons/eyedropper-light.svg?v=933055352136060b967160c68eb024fc9f6f6561d4b50863a03c314d7e28463c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
