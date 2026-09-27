export const name="shirt-folded-thin";
export const id="dl_9be2ec9ceba01efc9ff5";
export const url=new URL("../icons/shirt-folded-thin.svg?v=7a36f9b093caa97c4027a33dbcd6bee5268f36dd5da1dfbed3a3de51d20f7b61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
