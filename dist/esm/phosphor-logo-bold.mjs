export const name="phosphor-logo-bold";
export const id="dl_1ef7d55b9c6349e3b4ef";
export const url=new URL("../icons/phosphor-logo-bold.svg?v=9e6a32649297bef33df30d94c6b1cb808365cfcd984d183467a1b6792efc1572",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
