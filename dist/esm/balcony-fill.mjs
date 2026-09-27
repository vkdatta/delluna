export const name="balcony-fill";
export const id="dl_fab0e2421959c2f85b73";
export const url=new URL("../icons/balcony-fill.svg?v=5a6d3e551697437987fc9736f9ec5dc295033b644cb79cf0467d4ed04f682c80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
