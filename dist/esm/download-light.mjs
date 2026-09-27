export const name="download-light";
export const id="dl_2e10340e952c4527bb13";
export const url=new URL("../icons/download-light.svg?v=7fd2fca1ef9b30ee8b7a314d2ea9f56ce8b5375425cbb00b9180eb3b627f515c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
