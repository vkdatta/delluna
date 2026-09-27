export const name="robot-bold";
export const id="dl_bf4edc78349e41839789";
export const url=new URL("../icons/robot-bold.svg?v=3dd216f85677139abfe7492ef406cba1dfba802c8895b0a2670774b18ed6c5fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
