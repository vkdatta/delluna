export const name="mask-sad-light";
export const id="dl_edfcc3d7460e438fa6bb";
export const url=new URL("../icons/mask-sad-light.svg?v=4211e318dd90d2dfef9a02de0359a1da7182de357106d3ccedcc75a68d814d44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
