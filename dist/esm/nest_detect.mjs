export const name="nest_detect";
export const id="dl_9f5dd2a180a931f4b09c";
export const url=new URL("../icons/nest_detect.svg?v=cefbe32865ef647499be612eafe751d9c73a906951633aadc5ed8282c39e8878",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
