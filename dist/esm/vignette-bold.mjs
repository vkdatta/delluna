export const name="vignette-bold";
export const id="dl_9c1067c2da0e4c37a56f";
export const url=new URL("../icons/V/vignette-bold.svg?v=5512de0597589401d6060cdc28b4eb424c910a9d1165fcc78a68cb7e383e77eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
