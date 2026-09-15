export const name="face";
export const id="dl_ab70e7ee0681423598b4";
export const url=new URL("../icons/F/face.svg?v=310ffd43611cccde822707543915607492a5f83f6bfb66599b0ca4759b537868",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
