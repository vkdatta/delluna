export const name="funnel-fill";
export const id="dl_902763ea3f874b7da46b";
export const url=new URL("../icons/funnel-fill.svg?v=be209055a7c676ea11c159531a2f7929f186904b86acaab15038015544763f79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
