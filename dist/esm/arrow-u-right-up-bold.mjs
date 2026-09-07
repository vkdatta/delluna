export const name="arrow-u-right-up-bold";
export const id="dl_5bec561247fa4c7f9b23";
export const url=new URL("../icons/arrow-u-right-up-bold.svg?v=0033712c0d0cd5f3927c7da57f95be77e2f80828c5415f9574741bca8715ab8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
