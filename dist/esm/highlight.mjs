export const name="highlight";
export const id="dl_fa5863fc2dafb99595bb";
export const url=new URL("../icons/highlight.svg?v=e6a7a4621ece35f673dd33beb2e875da4315325142a18181de8e7eaa91bedcab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
