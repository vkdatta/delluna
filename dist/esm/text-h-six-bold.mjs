export const name="text-h-six-bold";
export const id="dl_00d1bf7e1b149924cd84";
export const url=new URL("../icons/text-h-six-bold.svg?v=5564cf46f1cc85ba8b046578cdf752ba1eda995c9d26e224a14d9ff55c657fbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
