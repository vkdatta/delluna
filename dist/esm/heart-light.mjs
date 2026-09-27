export const name="heart-light";
export const id="dl_2326bf6d572441c1aaaa";
export const url=new URL("../icons/heart-light.svg?v=8577114c35cebc4df8164ea1f8e87ad66cea924dd605c252af9f4afeb84ba215",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
