export const name="filter_down";
export const id="dl_305301386fdd86b2fd27";
export const url=new URL("../icons/filter_down.svg?v=942a270b6b1282e7c5c1dd7eb46326111daa1be1f9d499954a7fee2af423e445",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
