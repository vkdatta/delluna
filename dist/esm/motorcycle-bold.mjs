export const name="motorcycle-bold";
export const id="dl_86931d9be8ad4869b68c";
export const url=new URL("../icons/motorcycle-bold.svg?v=c912f9dbd86084ba7343be9f5f6ef6ffdd8cb104e57e40a6119d41a9d75bca74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
