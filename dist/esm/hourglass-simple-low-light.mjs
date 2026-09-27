export const name="hourglass-simple-low-light";
export const id="dl_14f149e97e1746e1a7fc";
export const url=new URL("../icons/hourglass-simple-low-light.svg?v=9d73904b900614d307340396f1bf215f776bcf86d3dbcd4d4ad2163317fd61d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
