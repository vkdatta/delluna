export const name="speed";
export const id="dl_0c7eca8a9b88f8505710";
export const url=new URL("../icons/speed.svg?v=716a39a27d43786006506deab6562a0273976dd4047c4144a92a1ff43eac37d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
