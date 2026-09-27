export const name="quickreply-fill";
export const id="dl_8015d277e2b2b233e449";
export const url=new URL("../icons/quickreply-fill.svg?v=b8e8a38b1860428070abd90564d6dea876128af5fa7729069770cf3b1868526d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
