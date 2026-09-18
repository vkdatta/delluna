export const name="sports_gymnastics-fill";
export const id="dl_bfb8f768934a46f98c86";
export const url=new URL("../icons/sports_gymnastics-fill.svg?v=22009bd8e78dabce87ab78298ab7552cd6934a1119611660a05e8c4ce10aa27b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
