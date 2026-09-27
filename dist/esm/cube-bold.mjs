export const name="cube-bold";
export const id="dl_a429cca30bfc4ff2b6f6";
export const url=new URL("../icons/cube-bold.svg?v=bcf05874b2fc1c6fe806401139bd130f21a19016b41d970be9be54017d964381",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
