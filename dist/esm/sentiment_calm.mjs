export const name="sentiment_calm";
export const id="dl_ce6a9995daf12e2737d0";
export const url=new URL("../icons/sentiment_calm.svg?v=a45a348ce3291bf10864beb6efcdf0cc77562b3332bc83c3d4e909a611e7cb2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
