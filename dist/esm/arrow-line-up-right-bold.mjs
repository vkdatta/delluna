export const name="arrow-line-up-right-bold";
export const id="dl_b3f5746dea3947e7a9d4";
export const url=new URL("../icons/arrow-line-up-right-bold.svg?v=1e5fc3ee2ef0381a74619a589133841abf28beb58841aea589ccfee4086d8e87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
