export const name="hand-withdraw-duotone";
export const id="dl_ed465fdf257b4fc4b921";
export const url=new URL("../icons/hand-withdraw-duotone.svg?v=f6af6a6944f5a9e79c0e58618e28ebeeed44db494c91f394b585ec46f0448179",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
