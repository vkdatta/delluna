export const name="data_thresholding";
export const id="dl_aab34042a0404a58ae04";
export const url=new URL("../icons/D/data_thresholding.svg?v=db403ed8f86513f09b6f119dd59a9750e7bf529a69696eae36b072b6c267b1ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
