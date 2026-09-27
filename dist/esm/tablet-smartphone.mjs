export const name="tablet-smartphone";
export const id="dl_deab320d1d8f4a4fb8c4";
export const url=new URL("../icons/tablet-smartphone.svg?v=f4596be74457c91d144e0a8753fecd4177662c0f43f4d98a7fe7b396e4a2dffe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
