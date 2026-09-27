export const name="square-dashed-mouse-pointer";
export const id="dl_d0c352d917d746bb9c38";
export const url=new URL("../icons/square-dashed-mouse-pointer.svg?v=a885ea45e7269d7d25b80a18815b8d81f71b2bcebf943ffc15ae41007b2e1059",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
