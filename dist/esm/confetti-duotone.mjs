export const name="confetti-duotone";
export const id="dl_059d55145bc64c7fa54b";
export const url=new URL("../icons/confetti-duotone.svg?v=aba9e855f4780edd1cb67b32c0160b7590350f52450c20bf31483a4909ccb87c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
