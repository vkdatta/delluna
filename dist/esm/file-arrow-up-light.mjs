export const name="file-arrow-up-light";
export const id="dl_b599e594b42940b884c8";
export const url=new URL("../icons/file-arrow-up-light.svg?v=5b04f1336eefd8609147c7793afe9433ad7bb17f1c34ceb0f48dead4863b822d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
