export const name="folder_match";
export const id="dl_139b1f0432b235bd95f7";
export const url=new URL("../icons/folder_match.svg?v=72546735569fb64f139b0848db61c75c33546b7d1999115e34650ba61702f937",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
