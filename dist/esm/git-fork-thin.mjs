export const name="git-fork-thin";
export const id="dl_6ac1b9e72b324508bd8e";
export const url=new URL("../icons/git-fork-thin.svg?v=926c6989ae2d9912a71085f038a42150ad01ca41427a51869a11f0cba7365d6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
