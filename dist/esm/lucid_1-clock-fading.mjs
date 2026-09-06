export const name="lucid_1-clock-fading";
export const id="dl_3b23f9a86e7745caa0e1";
export const url=new URL("../icons/lucid_1-clock-fading.svg?v=06aea5ef26e061539f66ed0ab47accc073d7384117e2495273771ea95d508860",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
