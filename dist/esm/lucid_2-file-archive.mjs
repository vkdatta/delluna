export const name="lucid_2-file-archive";
export const id="dl_51bc8ad980f6470eacda";
export const url=new URL("../icons/lucid_2-file-archive.svg?v=dd28eb0ed969ca070e8c21dc171c35e254d1da99313064892e8f90ce29cf654d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
