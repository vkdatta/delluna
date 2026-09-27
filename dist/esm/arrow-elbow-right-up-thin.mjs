export const name="arrow-elbow-right-up-thin";
export const id="dl_b9970133c5064d04a376";
export const url=new URL("../icons/arrow-elbow-right-up-thin.svg?v=a7a352fb7a06488a0cafd6acd79bb270096890a8c4df6ba8759a898c158637b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
