export const name="git-fork-thin";
export const id="dl_6ac1b9e72b324508bd8e";
export const url=new URL("../icons/git-fork-thin.svg?v=1743fbebd3950a3bace4adf3a99c9184dcd8831d55dec399b232c717ddbc6a92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
