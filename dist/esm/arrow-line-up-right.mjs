export const name="arrow-line-up-right";
export const id="dl_737b821e43174a9a91be";
export const url=new URL("../icons/arrow-line-up-right.svg?v=388a2a9c9d3ac48844312fb7fbba4259339de0167eca6e0a14096d8b65139551",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
