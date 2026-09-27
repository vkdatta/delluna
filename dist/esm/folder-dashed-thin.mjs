export const name="folder-dashed-thin";
export const id="dl_509c7122c8024790a2f9";
export const url=new URL("../icons/folder-dashed-thin.svg?v=da1c37c046261e4b03c7ac4c50133adcae26948b071ab9d1e1547de378b5e626",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
