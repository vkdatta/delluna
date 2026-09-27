export const name="parallelogram-thin";
export const id="dl_16189cdf8aa4499b8944";
export const url=new URL("../icons/parallelogram-thin.svg?v=334f44d45b4377bf0fa7490e4bdde84e0b81de582ea72bf66721bf1096a0ac39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
