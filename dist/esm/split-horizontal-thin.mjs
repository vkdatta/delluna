export const name="split-horizontal-thin";
export const id="dl_b9b5b6b756276a5a7447";
export const url=new URL("../icons/split-horizontal-thin.svg?v=255a3566df7d3035a65c7f5ef1374b3e8b79e1ece22d23ebc5fd829d4d25cd2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
