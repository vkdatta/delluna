export const name="full_coverage";
export const id="dl_b3daf090b469a2c96e85";
export const url=new URL("../icons/full_coverage.svg?v=1d77d849a0d8c8bbf0b02018d5aa198f2ad67aa493bd97b6075a13f91be37e25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
