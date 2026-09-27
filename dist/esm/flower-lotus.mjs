export const name="flower-lotus";
export const id="dl_008510345f514aa4a6eb";
export const url=new URL("../icons/flower-lotus.svg?v=8c0786abe8917daa3fe409a62da31a6e7f6b264d6d4ae5727f10d269cc1f2f5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
