export const name="yakitori-fill";
export const id="dl_be05798234ec4eed9640";
export const url=new URL("../icons/Y/yakitori-fill.svg?v=e5f162170caeb859266851c3562937f7516ea7fed1913ed6defa8d0999a729e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
