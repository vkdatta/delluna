export const name="number-circle-eight-thin";
export const id="dl_8eda5b9713de4bc8a782";
export const url=new URL("../icons/number-circle-eight-thin.svg?v=07e25b1f566f4ee2eca302753b1c15b1cdd17d8276950271253871e4b5a0bbb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
