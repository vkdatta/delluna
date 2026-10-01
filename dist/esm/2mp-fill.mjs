export const name="2mp-fill";
export const id="dl_9e3a4ac5d144a46f5dc3";
export const url=new URL("../icons/2mp-fill.svg?v=ad226ef304279fc3e6193de967e2a75eb199e0dbac63dd4b76304b4ad965ecd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
