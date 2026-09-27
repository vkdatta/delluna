export const name="caret-line-up-bold";
export const id="dl_a93ce1f00bf748d9b589";
export const url=new URL("../icons/caret-line-up-bold.svg?v=ddf5d9ec9752c4fccb4127ed3af0ade607444ab3e6e66907c06bbe2f9d2d2cd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
