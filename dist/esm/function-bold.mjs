export const name="function-bold";
export const id="dl_a7f6cd1a572b47bbb17d";
export const url=new URL("../icons/function-bold.svg?v=96689c2466c46ae655b6754616c05ca72c6ce48a5e20a954c177c070bba4284f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
