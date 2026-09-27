export const name="tea-bag-light";
export const id="dl_b389626843822bc45fb0";
export const url=new URL("../icons/tea-bag-light.svg?v=d1bccdf15575fe7ce2c03ff21fb6ff12564d8d0ac2e4cb2e81a69f1feb1dc615",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
