export const name="description-fill";
export const id="dl_18d4fb6e5b3b4ca5b78c";
export const url=new URL("../icons/D/description-fill.svg?v=61381edc03fd0ba0cdf49bd198d028c4f4f214597ea754eb108dcf22ed5db559",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
