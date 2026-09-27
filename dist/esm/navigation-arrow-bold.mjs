export const name="navigation-arrow-bold";
export const id="dl_8503572e631d44e3bed6";
export const url=new URL("../icons/navigation-arrow-bold.svg?v=a932f10ef2da646c9a9200745b7e6fd35018fcc18604139e3d6216e151e0812c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
