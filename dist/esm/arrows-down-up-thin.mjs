export const name="arrows-down-up-thin";
export const id="dl_723d168d63df4ff2b28c";
export const url=new URL("../icons/arrows-down-up-thin.svg?v=ec5057602aacb3a6ec3f608dc61fea6ad4f7dafbac7cce2a6a0c97ee4daef870",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
