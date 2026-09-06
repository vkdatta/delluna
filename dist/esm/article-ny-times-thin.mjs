export const name="article-ny-times-thin";
export const id="dl_d294c3039e92464f9ed6";
export const url=new URL("../icons/article-ny-times-thin.svg?v=0914bcd535e660401a08a4b48c86825fefb2960c7545f159597fcb40c714054d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
