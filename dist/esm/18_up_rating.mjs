export const name="18_up_rating";
export const id="dl_8c4f6e42a4cf90542598";
export const url=new URL("../icons/18_up_rating.svg?v=d2d43e4bd41968bee8c613a7e493d9472bfc0e0f9d59dd4d45d80a73bb124481",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
