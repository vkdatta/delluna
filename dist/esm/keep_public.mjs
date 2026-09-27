export const name="keep_public";
export const id="dl_39ab39fc0e459051a693";
export const url=new URL("../icons/keep_public.svg?v=a52a9ea20761efab645f77bff8e1fc0853a87fd4e2eea58b7e8ddb6d2384df1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
