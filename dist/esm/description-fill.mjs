export const name="description-fill";
export const id="dl_dad55349a03684ee6854";
export const url=new URL("../icons/description-fill.svg?v=61381edc03fd0ba0cdf49bd198d028c4f4f214597ea754eb108dcf22ed5db559",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
