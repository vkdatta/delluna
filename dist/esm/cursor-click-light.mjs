export const name="cursor-click-light";
export const id="dl_7f09dce56a4d40789434";
export const url=new URL("../icons/cursor-click-light.svg?v=1767506cd477c4eeb6d258d12044ccdfd38d0efeadf1231cc0266972cf966e43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
