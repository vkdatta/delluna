export const name="signpost";
export const id="dl_d18c78b8ce33e616190a";
export const url=new URL("../icons/signpost.svg?v=e16802855703b09a6d280f2b6423f70a6eb1586f363820564044255c7c407e3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
