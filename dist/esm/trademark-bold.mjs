export const name="trademark-bold";
export const id="dl_777dad256dd538ae3a4f";
export const url=new URL("../icons/trademark-bold.svg?v=1552040db88a05d7e605df82cd33e06f8c4787100af6536e08721656efbc35cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
