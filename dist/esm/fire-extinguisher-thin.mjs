export const name="fire-extinguisher-thin";
export const id="dl_2cbf23acc5f04c049da0";
export const url=new URL("../icons/fire-extinguisher-thin.svg?v=e8470cde2680a12a90b540c0db7ffab5326a2494c0619288b7db303be2671191",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
