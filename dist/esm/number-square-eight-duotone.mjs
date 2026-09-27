export const name="number-square-eight-duotone";
export const id="dl_3e8625e664f94b58b45e";
export const url=new URL("../icons/number-square-eight-duotone.svg?v=b14d08d575eb6fe7bd524fa5615776af845410c96945b5812533f2eea1d113f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
