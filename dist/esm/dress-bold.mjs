export const name="dress-bold";
export const id="dl_97aac736a4a34e088f59";
export const url=new URL("../icons/dress-bold.svg?v=f3542aece6027150b637de4c1214c7f03ca71f13b0cf60b6277774d38857ab08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
