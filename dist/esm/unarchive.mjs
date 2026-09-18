export const name="unarchive";
export const id="dl_4476376a6c4e4580be50";
export const url=new URL("../icons/unarchive.svg?v=5025c8fcf6d0e5d572bc782df1470ebb8628d071978576ee170fe425a15d7aa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
