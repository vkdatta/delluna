export const name="assist_walker-fill";
export const id="dl_423cb458b313fbc4f70f";
export const url=new URL("../icons/assist_walker-fill.svg?v=0220457826b0a34166d18028861377c36891176d55b2ed758e92f52a7e853c87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
