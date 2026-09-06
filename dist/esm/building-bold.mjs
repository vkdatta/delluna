export const name="building-bold";
export const id="dl_053e5a5bc1c24e22855e";
export const url=new URL("../icons/building-bold.svg?v=52104dbb6a05031213623717038501b7fd6d57744014a2880a785984062ef50a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
