export const name="no_photography-fill";
export const id="dl_8012abfb586acb2f4586";
export const url=new URL("../icons/no_photography-fill.svg?v=bb0378dce622dc03ea86c0fb3854ede492e7bc6b79c05315d2ab70559dccfb87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
