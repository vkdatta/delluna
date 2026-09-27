export const name="git-merge-thin";
export const id="dl_ab80fe6cd73545118abb";
export const url=new URL("../icons/git-merge-thin.svg?v=bf3dcf3e1c7955305253f89630a09ada91860d8d6b3cae329db101bc5ac6c819",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
