export const name="git-branch-bold";
export const id="dl_159a7240c8f1490a97d7";
export const url=new URL("../icons/git-branch-bold.svg?v=d9dd7f56c722cf3c164edaf0296f08b35ee8e572857181322236b8631e38a92c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
