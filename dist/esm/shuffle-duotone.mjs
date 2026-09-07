export const name="shuffle-duotone";
export const id="dl_8c4a2cab5bfb4837a861";
export const url=new URL("../icons/S/shuffle-duotone.svg?v=7effceae51ff3f721b460b6bb6a056ae15c491a10ab464cf900a13f7443dca86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
