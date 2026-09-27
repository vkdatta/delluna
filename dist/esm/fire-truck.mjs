export const name="fire-truck";
export const id="dl_2ff1b344baa6424185c8";
export const url=new URL("../icons/fire-truck.svg?v=84e68dd91cdf30f24a6cc862d3460def6cb8a3ac3e4b7072cf930ef8a0c83ce3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
