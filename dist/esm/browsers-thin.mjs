export const name="browsers-thin";
export const id="dl_75e45b2706fd4720900b";
export const url=new URL("../icons/browsers-thin.svg?v=b04c8dc47bca3838332d3448870067bb0adcea6f85c597a280c6d2df29013f1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
