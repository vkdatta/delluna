export const name="play-circle-duotone";
export const id="dl_eabf745a837c4e8db1a0";
export const url=new URL("../icons/play-circle-duotone.svg?v=39452bb278454546f08bfec5ae419031b048523d06f18609c387a4cbcb2a64bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
