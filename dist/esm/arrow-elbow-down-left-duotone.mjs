export const name="arrow-elbow-down-left-duotone";
export const id="dl_499a8427948b4e5ebe51";
export const url=new URL("../icons/arrow-elbow-down-left-duotone.svg?v=3e350481a2982c0af32030e1d262f06a1e2f29cc1aaf9d7fecbb686c411623a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
