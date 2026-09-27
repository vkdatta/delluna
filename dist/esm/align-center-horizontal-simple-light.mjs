export const name="align-center-horizontal-simple-light";
export const id="dl_5469cb4150fa4c128d76";
export const url=new URL("../icons/align-center-horizontal-simple-light.svg?v=3152c015965a0e1466fd988547b101513d7bd5e967523c24299f219fe36e204f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
