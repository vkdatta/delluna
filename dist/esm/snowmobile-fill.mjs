export const name="snowmobile-fill";
export const id="dl_9fe861265ecac411e5ea";
export const url=new URL("../icons/snowmobile-fill.svg?v=a520a6870384b1314d29f20db299c28523e05a214860dfeb095546acf5afdd03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
