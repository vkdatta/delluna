export const name="heart-bold";
export const id="dl_4f13095b31bc410bb984";
export const url=new URL("../icons/heart-bold.svg?v=786ecbd4cb71cf3356bc3da191185084693fc278dc3aaf389bcdeb8b10fc7104",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
