export const name="number-eight-duotone";
export const id="dl_ab0a5d55a5324ffdb37e";
export const url=new URL("../icons/number-eight-duotone.svg?v=84b7c41cc760d057419ddba6e9badf7b93bce7b2df2d3225591c9b8f04cae708",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
