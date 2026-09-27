export const name="bookmark_manager-fill";
export const id="dl_f2efc1a09bd4914add8c";
export const url=new URL("../icons/bookmark_manager-fill.svg?v=4615aa904a96e4d751d112134fb96bf18877d954cc14b8435aae267e47248d63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
