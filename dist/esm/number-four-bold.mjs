export const name="number-four-bold";
export const id="dl_dc599179f7d443598f82";
export const url=new URL("../icons/number-four-bold.svg?v=4ea867366a1891ecde9c097fc134b9856f04bddf0813b12600849ebde19ced38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
