export const name="checks-light";
export const id="dl_60215b3674694eb38efe";
export const url=new URL("../icons/checks-light.svg?v=7ca8d2a8b26cbec2d0c19b7658c7e603d0258f8aac0ddbdc4da784f2d388fea7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
