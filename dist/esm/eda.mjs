export const name="eda";
export const id="dl_a4c497ab92b1ae2a5d8f";
export const url=new URL("../icons/eda.svg?v=84f060d1ec01d196a242ea6fdf1c2858972788141ad988be8c7a98a50549f5d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
