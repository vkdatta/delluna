export const name="arrow_forward_ios-fill";
export const id="dl_b19acac495ff437e9cd2";
export const url=new URL("../icons/arrow_forward_ios-fill.svg?v=c1fa5f06af46ce2cf1b76e50b66ec814b818a11c87e04f7204b5804c2f0d63e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
