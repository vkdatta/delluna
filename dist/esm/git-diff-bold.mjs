export const name="git-diff-bold";
export const id="dl_98c966bc1e5e4140951b";
export const url=new URL("../icons/git-diff-bold.svg?v=aabb1ab8f9e30fefba8e1fb1b7fef40e0653c2d22f0b0d0ac98e6dde923471eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
