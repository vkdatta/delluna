export const name="git-diff-thin";
export const id="dl_c84f088f57d3493e8345";
export const url=new URL("../icons/git-diff-thin.svg?v=559702d16d243c9219752b174947236a06521b60b7be7353686df62543699abd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
