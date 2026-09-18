export const name="wb_sunny-fill";
export const id="dl_595e35ca8e9d4ff8850a";
export const url=new URL("../icons/wb_sunny-fill.svg?v=7245da2f60c015c43fae93a53b1789772a427d2706a3b4870b4539d70d10b8cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
