export const name="lucid_3-square-arrow-right-exit";
export const id="dl_61475b87842d4c158776";
export const url=new URL("../icons/lucid_3-square-arrow-right-exit.svg?v=157e7b9bea908abb753e6bfaa59b3c9f7299cdf81e5087db6d832f5ebbc886ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
