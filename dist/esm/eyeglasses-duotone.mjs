export const name="eyeglasses-duotone";
export const id="dl_0c95e5b8efb143109a96";
export const url=new URL("../icons/eyeglasses-duotone.svg?v=d7188a759afd149209e866c064675d7bffcbf3aa7098e9eac46e85d573c318cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
