export const name="diamonds-four-light";
export const id="dl_f5d419ce36424027a51a";
export const url=new URL("../icons/diamonds-four-light.svg?v=39d418ef129f14bb8f49b32503fd0317619264fdd170323a94c6b8283489eef4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
