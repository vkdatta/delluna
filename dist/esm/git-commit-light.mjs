export const name="git-commit-light";
export const id="dl_ad5e2f6f9ce64dcda94e";
export const url=new URL("../icons/git-commit-light.svg?v=99e2893f65ad037e33b18d3bbe45692a28f566d62ddbe66f6b3809701a5649e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
