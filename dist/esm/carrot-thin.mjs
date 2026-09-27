export const name="carrot-thin";
export const id="dl_9477fae32bf74a948515";
export const url=new URL("../icons/carrot-thin.svg?v=dbe70398a2070dcaa3da60450ddb4136aedff70d8d1cfcc2d353e6d150c5dc72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
