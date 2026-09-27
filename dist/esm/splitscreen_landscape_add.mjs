export const name="splitscreen_landscape_add";
export const id="dl_764bd3de89b05ce53a93";
export const url=new URL("../icons/splitscreen_landscape_add.svg?v=765df66934524a07e280f65df9071477fa916fded90db72d6f2b17a01a398553",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
