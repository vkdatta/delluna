export const name="respiratory_rate";
export const id="dl_9211e92d1356e6e9254b";
export const url=new URL("../icons/respiratory_rate.svg?v=26f6f8d562e4965d624323b509282c9924ffe3dea33246b8c4780e943261dd92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
