export const name="number-one-bold";
export const id="dl_fbddd952e60c4dcb91f1";
export const url=new URL("../icons/number-one-bold.svg?v=600a7b80eb155b2df8b8883a11332178460ac7411e342fa9b585ff27be796f5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
