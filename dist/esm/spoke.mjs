export const name="spoke";
export const id="dl_a1a40f6a361cf1c5d083";
export const url=new URL("../icons/spoke.svg?v=a936c6fc0830a502433a510709c5d9300ec559fb237d776e512a8cbb9fd903bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
