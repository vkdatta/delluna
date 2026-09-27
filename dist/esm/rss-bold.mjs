export const name="rss-bold";
export const id="dl_5cd6c12c16fa47c1bd55";
export const url=new URL("../icons/rss-bold.svg?v=ac165f9383c0ea385ce38102879b5e04b2a73df81cc07b3dd36278a9406b52a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
