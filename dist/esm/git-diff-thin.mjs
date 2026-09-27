export const name="git-diff-thin";
export const id="dl_c84f088f57d3493e8345";
export const url=new URL("../icons/git-diff-thin.svg?v=6f3bca3710d5453e54d49b0d23e36a0523f87c48f3dcdfcc97ebdd38f39a6857",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
