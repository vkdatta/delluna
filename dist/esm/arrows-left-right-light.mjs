export const name="arrows-left-right-light";
export const id="dl_0ab7f92b21fe481498c2";
export const url=new URL("../icons/arrows-left-right-light.svg?v=b6833b249082daf95c515a914540bd3d2b3d3a3d53508a5691d5bb6d77858e38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
