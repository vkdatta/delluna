export const name="plus-minus";
export const id="dl_5205df930d4040d4a4ba";
export const url=new URL("../icons/plus-minus.svg?v=16010785df2b69f27434d608456cedd35c97dc77aae1fc0ceb30a67e4ad3684d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
