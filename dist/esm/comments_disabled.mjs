export const name="comments_disabled";
export const id="dl_bbed9e706d904701bfa1";
export const url=new URL("../icons/C/comments_disabled.svg?v=9d64741f07e736a458b33fecaa3fe5aad53b913d140070094596d60ddb087ad8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
