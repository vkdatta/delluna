export const name="circle-notch";
export const id="dl_d83c52c28a5c4345959d";
export const url=new URL("../icons/circle-notch.svg?v=4ee21e9b3039d81c82a1dbe4f3bc13d67135065bee8165c6347c703fbaf0d74d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
