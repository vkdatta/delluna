export const name="git-merge-duotone";
export const id="dl_9501bf5e674b41ed8d80";
export const url=new URL("../icons/git-merge-duotone.svg?v=736cf1120a0c3ef7174fcad5159a6a53235aba0468bb6912aeb46f199a3ea1f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
