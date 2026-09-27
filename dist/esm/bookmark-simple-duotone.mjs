export const name="bookmark-simple-duotone";
export const id="dl_f7bd74c59a7d4e5e9aef";
export const url=new URL("../icons/bookmark-simple-duotone.svg?v=7a8a34e4010a05077179fd035bf1700f3a8e70e65430d3936c4d9061788827e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
