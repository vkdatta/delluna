export const name="arrow-fat-line-down-bold";
export const id="dl_88ea0f6a951048d0a5cd";
export const url=new URL("../icons/arrow-fat-line-down-bold.svg?v=cc8ffaad9ebf4b542b0b5ce17e537bc92be187b3573fa74d459717d8aa51bbe5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
