export const name="ghost-light";
export const id="dl_7f9c45306d2c40e5bbd2";
export const url=new URL("../icons/ghost-light.svg?v=673503fb447c015b4559436c85f6a7c5750bec5c8198373f14f5be0d608a7ee4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
