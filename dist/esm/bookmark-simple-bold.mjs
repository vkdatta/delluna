export const name="bookmark-simple-bold";
export const id="dl_bce91a0c970647c2bec7";
export const url=new URL("../icons/bookmark-simple-bold.svg?v=b21dbbd6cec586857f32c5a0c2fc50c16b96c67d12d4f161b6b2d6e8c1c68a9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
