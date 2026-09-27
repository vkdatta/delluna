export const name="lighthouse";
export const id="dl_067df8e5b248407580df";
export const url=new URL("../icons/lighthouse.svg?v=385f7e51ca190a7a2173a03db86493fd5686f035ccba091f3d8b10de7bd2fac3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
