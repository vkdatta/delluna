export const name="roller_shades";
export const id="dl_97b41fe749c985ba1cab";
export const url=new URL("../icons/roller_shades.svg?v=6ffe13cefa09d22a03db13b6ef5e4aee993b0a70b57971ed9c901af1841d3f0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
