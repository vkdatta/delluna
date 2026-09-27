export const name="git-merge-light";
export const id="dl_b14571e9ff0f43e78f00";
export const url=new URL("../icons/git-merge-light.svg?v=70323322e0f86a792b5144348f6cd15bd1b52ba07bf8d9c80964efe24ce723c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
