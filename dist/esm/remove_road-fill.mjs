export const name="remove_road-fill";
export const id="dl_8022d07dd566b0447cfe";
export const url=new URL("../icons/remove_road-fill.svg?v=2e2ad13b8e60aeed269d36ba668fae51407cafcb92f8e0f1b43feee425322e8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
