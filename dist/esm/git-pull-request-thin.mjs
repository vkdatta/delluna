export const name="git-pull-request-thin";
export const id="dl_9e5937c3585a46a99141";
export const url=new URL("../icons/git-pull-request-thin.svg?v=3e753b3b23aee34a688f13f7a71fab7be0172b603574d5f5fb058099319ed2cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
