export const name="circle_circle";
export const id="dl_0befe55fc187ad96e4c4";
export const url=new URL("../icons/circle_circle.svg?v=18bb4e2be5b05a496ab891fb399670a2d934dee169edcaef05498047e598514f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
