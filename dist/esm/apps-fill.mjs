export const name="apps-fill";
export const id="dl_ed266adacaf7794b3624";
export const url=new URL("../icons/apps-fill.svg?v=f14f5778a308e173873dafe143775d62f960c0617281d7cd27dffb9d795646d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
