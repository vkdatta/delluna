export const name="pen";
export const id="dl_f0252156612f411badd1";
export const url=new URL("../icons/pen.svg?v=98a1ef2fb40971880dc3f1efd9f5bca29f253e88cdf3c038a8b33c0f3237b043",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
