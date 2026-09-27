export const name="number-square-three-light";
export const id="dl_d4f45e2e7fa84bfa8c96";
export const url=new URL("../icons/number-square-three-light.svg?v=60a7c14677c2e8c2fd6ba896b40b995f7feab6ec45b4cab91ee9d5167b3690dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
