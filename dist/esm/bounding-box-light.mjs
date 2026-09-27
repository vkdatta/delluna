export const name="bounding-box-light";
export const id="dl_541c0fc841d04909bc48";
export const url=new URL("../icons/bounding-box-light.svg?v=9c10b60551247a7e31886a14f1f9c377d88410ea113b7a7bcaab1bc105c507f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
