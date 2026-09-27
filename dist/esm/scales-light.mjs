export const name="scales-light";
export const id="dl_0a55c202fc2a656bf4a8";
export const url=new URL("../icons/scales-light.svg?v=273a1bebb2947d6bdf17f6b71c0ff75b97eb20a89006bab5569afbbcd73a769e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
