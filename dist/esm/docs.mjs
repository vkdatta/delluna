export const name="docs";
export const id="dl_ad6f6bd4fe9045689fe5";
export const url=new URL("../icons/docs.svg?v=cf519d58d8993a4dca46cd37469a65c7912c2b145101d3f9ea22155755b03cdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
