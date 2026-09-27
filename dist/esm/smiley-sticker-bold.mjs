export const name="smiley-sticker-bold";
export const id="dl_64badb4b3e23fe2a1910";
export const url=new URL("../icons/smiley-sticker-bold.svg?v=16f08bdaafeaaf93d4cebbe88a16adbed107e0fb30c70fa64025771a4a7bf110",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
