export const name="water_do-fill";
export const id="dl_8cc07e9efd2d8e2eab32";
export const url=new URL("../icons/water_do-fill.svg?v=d79de0103a4847f663255f3967bca09b068ede6f1f26f0e6aedc8f7a738760c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
