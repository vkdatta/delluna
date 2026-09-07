export const name="shield-slash-fill";
export const id="dl_b88ada8c40324f5192e0";
export const url=new URL("../icons/S/shield-slash-fill.svg?v=7eeae8f14ca8794ffa3756e73038f39d736f8cdfd8c99d50f005ac212b58c339",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
