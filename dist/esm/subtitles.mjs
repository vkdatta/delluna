export const name="subtitles";
export const id="dl_4a785f2c66fe83b7d9a9";
export const url=new URL("../icons/subtitles.svg?v=e96f3bb8bada57864bcceea5c44fd12cab6acbaafe428c2c1de82570b99ea428",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
