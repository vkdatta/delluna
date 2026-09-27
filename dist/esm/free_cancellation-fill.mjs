export const name="free_cancellation-fill";
export const id="dl_95106811d1003a629530";
export const url=new URL("../icons/free_cancellation-fill.svg?v=ed012aad89b86782808bb74ed4bd85708ee6c7041dbe0e02156294e72ff584f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
