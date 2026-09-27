export const name="swap-duotone";
export const id="dl_ee66e486a4c08214ce06";
export const url=new URL("../icons/swap-duotone.svg?v=cab30dea140a69700086758ddf96c72c45959fd2a9a617d5020629c4d53bfdb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
