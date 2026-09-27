export const name="megaphone-simple-bold";
export const id="dl_98d3b1a75e2144929346";
export const url=new URL("../icons/megaphone-simple-bold.svg?v=e8f20cdc8ee6582da1074672f3d7350e79b6ecbcbd7797569668e93fccdabb29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
