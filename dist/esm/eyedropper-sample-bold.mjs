export const name="eyedropper-sample-bold";
export const id="dl_daae982cf1144a7fa173";
export const url=new URL("../icons/eyedropper-sample-bold.svg?v=7c989bd9d4687fb1fd46f5ecaba286c5c0e2249f4bf3546eae3f9f40cd21af11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
