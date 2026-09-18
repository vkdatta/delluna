export const name="home_max_dots";
export const id="dl_45e636b4ec4340108ff2";
export const url=new URL("../icons/H/home_max_dots.svg?v=f699ecffe224b792491d3501e63b27653280ca9ae504b3afbe272ded4482f3e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
