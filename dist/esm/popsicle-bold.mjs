export const name="popsicle-bold";
export const id="dl_b11efeceecd24a5aabf5";
export const url=new URL("../icons/popsicle-bold.svg?v=c0955dec05c2dee0a1f5b88d191d8a2dd167e06196c14ba1e19e53716e6665e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
