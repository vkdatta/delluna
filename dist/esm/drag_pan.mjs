export const name="drag_pan";
export const id="dl_d55e935ec269c9b4cc16";
export const url=new URL("../icons/drag_pan.svg?v=620596338c7aae21a9f7cafe77911d511756b77b3664778f98ae0ebdb5ececd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
