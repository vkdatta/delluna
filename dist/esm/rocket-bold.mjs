export const name="rocket-bold";
export const id="dl_2993f2e0f515442dbce8";
export const url=new URL("../icons/rocket-bold.svg?v=c56bbf5a9da6ef41503008ffe98358dc530ed03652fe70627974a76ecbd9f6d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
