export const name="lucid_3-scaling";
export const id="dl_063eaeeb6ebf400ca362";
export const url=new URL("../icons/lucid_3-scaling.svg?v=db231a9d461d39577a1d7e11617dc99e3f54fdf23d95af0f18e76b2d1a090c80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
