export const name="text-indent-duotone";
export const id="dl_351b5753d43db6c9551c";
export const url=new URL("../icons/text-indent-duotone.svg?v=edbd67d02cc8b2bdcebec7186d027a0890698d817991e19a275417ff79205e59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
