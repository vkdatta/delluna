export const name="parallelogram-bold";
export const id="dl_91a5ee9d5b314e3096d8";
export const url=new URL("../icons/parallelogram-bold.svg?v=5404b605a1b4a00fdd3447d21159f2167ae52343fd27099ab122d6744c898613",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
