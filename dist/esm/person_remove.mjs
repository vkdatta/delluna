export const name="person_remove";
export const id="dl_2557c94227f1c57d8e0a";
export const url=new URL("../icons/person_remove.svg?v=4ff979a47e699cc165e3b44020d06a6daf0c447f79d4ebfaedda2cca686b40f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
