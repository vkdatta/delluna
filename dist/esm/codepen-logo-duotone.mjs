export const name="codepen-logo-duotone";
export const id="dl_d0bed11583b04a6498a2";
export const url=new URL("../icons/codepen-logo-duotone.svg?v=4d55cac3f8cbe675cfc55c8137db740d40933e6e18ea5fbc644e4ffb340404c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
