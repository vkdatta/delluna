export const name="table_eye-fill";
export const id="dl_982c02c1a9f1bddfd9dd";
export const url=new URL("../icons/table_eye-fill.svg?v=618abdf87c31bc92d051840a37bbb49b92e303d990ad0444a185928d4e373884",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
