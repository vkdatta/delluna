export const name="eyedropper-sample-light";
export const id="dl_9fc75366a5094f8baa34";
export const url=new URL("../icons/eyedropper-sample-light.svg?v=79b76288da908847770e1784f37258540e8fc8946f623f5dba719225f0aa2c0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
