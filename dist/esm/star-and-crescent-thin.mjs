export const name="star-and-crescent-thin";
export const id="dl_fa764dd0e97dbbebc173";
export const url=new URL("../icons/star-and-crescent-thin.svg?v=346797d2e4c53f0a8bc9fa6bc773d3def2e77137b8a75c862207c61c047cddb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
