export const name="wave-sine-duotone";
export const id="dl_c8d57a699433fc240e76";
export const url=new URL("../icons/wave-sine-duotone.svg?v=05a445c3160c2a8ab876f26713e594920b47d1c41290dffd19ff22df4d3992be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
