export const name="keep_public";
export const id="dl_e9e0d101b567b1406b79";
export const url=new URL("../icons/keep_public.svg?v=beb628076f1ae123109220e679bc109e093fd2daf8ffa74609697008c691a2ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
