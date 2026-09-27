export const name="git-pull-request-fill";
export const id="dl_50c180d04a92409683d6";
export const url=new URL("../icons/git-pull-request-fill.svg?v=c52799465315b18ba2b2ff0a72ab24821ab0e9b2266ce778bd423fd7e1d1e012",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
