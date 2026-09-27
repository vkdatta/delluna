export const name="cooking";
export const id="dl_1ab7130b252c748d0376";
export const url=new URL("../icons/cooking.svg?v=d06ab13b64a7a7c37f15f261e4f2640d760573a066d26013be06cde11f0b41d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
