export const name="article-ny-times-thin";
export const id="dl_d294c3039e92464f9ed6";
export const url=new URL("../icons/article-ny-times-thin.svg?v=69b30c1b051b111517addd094cb490596f96231e892011b2af282bfd0b956a8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
