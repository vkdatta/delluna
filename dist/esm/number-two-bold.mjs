export const name="number-two-bold";
export const id="dl_2c50277723e943f6b5ad";
export const url=new URL("../icons/number-two-bold.svg?v=c5c583a508b819e0e286f0301b57677a9d158dd0e53be104945e6879978eb621",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
