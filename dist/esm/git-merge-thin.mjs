export const name="git-merge-thin";
export const id="dl_ab80fe6cd73545118abb";
export const url=new URL("../icons/git-merge-thin.svg?v=b14bc15f8a286ebd6ca62a4fdddd0d76309dc33d057b0c880f3b8bcc1f2c8700",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
