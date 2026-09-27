export const name="git-merge-light";
export const id="dl_b14571e9ff0f43e78f00";
export const url=new URL("../icons/git-merge-light.svg?v=7ad624f76e92ae23cb8a9b6f70b81c0ae293d2ff298cab7958f2096ee7df5133",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
