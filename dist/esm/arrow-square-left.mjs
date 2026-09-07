export const name="arrow-square-left";
export const id="dl_d81592bc7f5c4ed4a918";
export const url=new URL("../icons/arrow-square-left.svg?v=ee2a0d62281d1f94c79fd6b8ba52a04ad5a43cc460ec27cddaccae0ffed3629e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
