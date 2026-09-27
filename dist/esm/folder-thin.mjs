export const name="folder-thin";
export const id="dl_b588840c96914f31abab";
export const url=new URL("../icons/folder-thin.svg?v=5d375e971a39650cc9322ccdbeace06b460f39335a3b8aa1b1638e397ea1a5ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
