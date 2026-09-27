export const name="tiktok-logo";
export const id="dl_4374aa268869dfddaa00";
export const url=new URL("../icons/tiktok-logo.svg?v=277690e006ab68e6030ba71037d3e444e09a042839956718183d33a20f4c58df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
