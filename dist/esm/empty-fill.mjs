export const name="empty-fill";
export const id="dl_5d7e7df76cb04e579ca3";
export const url=new URL("../icons/empty-fill.svg?v=984fea8647989386081266e4c2fd085f91d5564534a929c7b182c744c2660bd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
