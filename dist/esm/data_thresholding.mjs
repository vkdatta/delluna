export const name="data_thresholding";
export const id="dl_62cfd3fa29d8fcde6079";
export const url=new URL("../icons/data_thresholding.svg?v=4bc3c618ed9102f2641968590a768cc6301d8814b1d2cc0decbfe2dd0e7b2fe1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
