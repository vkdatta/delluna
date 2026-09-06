export const name="heart-straight-break";
export const id="dl_97d0fd2b24174c0f99b3";
export const url=new URL("../icons/heart-straight-break.svg?v=36edc242f8f6febcbde3ad047538605fba5293f8f589ae67624b6cbea8ea0007",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
