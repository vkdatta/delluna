export const name="skull-fill";
export const id="dl_d1ef364d29fc96a86a3a";
export const url=new URL("../icons/skull-fill.svg?v=ba81cbd944c71d777141d042f249c3b8f7f6be77624ae763fcc70023099a6cc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
