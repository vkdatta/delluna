export const name="git-pull-request-thin";
export const id="dl_9e5937c3585a46a99141";
export const url=new URL("../icons/git-pull-request-thin.svg?v=726fe6e0952048ab9117ca0cdb79f62c64ec2696362e0d17d4f50ab433b99d2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
