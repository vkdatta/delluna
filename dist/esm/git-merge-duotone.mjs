export const name="git-merge-duotone";
export const id="dl_9501bf5e674b41ed8d80";
export const url=new URL("../icons/git-merge-duotone.svg?v=2fea4fe89186722e89b7e05d1ed5b9c19eb4437bb0d60946d1da038354af35b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
