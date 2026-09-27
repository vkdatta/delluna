export const name="exclude-square-bold";
export const id="dl_5450fff89e3c4b36828a";
export const url=new URL("../icons/exclude-square-bold.svg?v=16a763376dcf07ad585917909fc3e5584a4603d40ae94e60ece2345fc0df23d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
