export const name="git-pull-request-light";
export const id="dl_4b442504bab84da69d83";
export const url=new URL("../icons/git-pull-request-light.svg?v=6a1e53cafdc5b0a334c14b42d781735250f3f8b3face4b831510f2f258afb6a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
