export const name="crop_square";
export const id="dl_fb1c75c75b60e777810d";
export const url=new URL("../icons/crop_square.svg?v=016979bbcc6ca356c53c184ae4d56326522258f892d9c9cc520be0b0a0aac346",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
