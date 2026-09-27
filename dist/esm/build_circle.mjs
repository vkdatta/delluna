export const name="build_circle";
export const id="dl_f4a539940b66942544f9";
export const url=new URL("../icons/build_circle.svg?v=19949bd5df92b25321e2b2d9337ce855f6ba53d20e4063644de67c9b420f2d95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
