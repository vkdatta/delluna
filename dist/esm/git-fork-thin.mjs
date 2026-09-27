export const name="git-fork-thin";
export const id="dl_6ac1b9e72b324508bd8e";
export const url=new URL("../icons/git-fork-thin.svg?v=90cae9e40a90f995c7d09d1f71576113427d063421bd9f53308f72fb589a7a63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
