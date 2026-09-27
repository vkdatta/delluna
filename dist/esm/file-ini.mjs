export const name="file-ini";
export const id="dl_9474ce6ec30b4b688e66";
export const url=new URL("../icons/file-ini.svg?v=6d5ca6c2689727a73a1bac4203f5ee06a8f4e365676ab2e5f4c508cab2b5052e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
