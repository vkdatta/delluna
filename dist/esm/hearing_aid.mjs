export const name="hearing_aid";
export const id="dl_270e04952bae43c78364";
export const url=new URL("../icons/H/hearing_aid.svg?v=7e786d5097ef4dc60c245b2efeb012b19d0db5f7cc4f77e55fa38abab88168b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
