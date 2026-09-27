export const name="arrow-elbow-left-down-light";
export const id="dl_61e535dcf0824920af5b";
export const url=new URL("../icons/arrow-elbow-left-down-light.svg?v=59642c24a6a0f0347eb3574a083ac00059d4fab554c8e49b38a4c8bc81e2a0cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
