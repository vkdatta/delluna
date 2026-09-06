export const name="arrow-square-left-bold";
export const id="dl_d6b3b0b6338f40d982d2";
export const url=new URL("../icons/arrow-square-left-bold.svg?v=35eefa53e6b4d7843c62b44796a84ca1a3c657bb2227e79fa397136cd5467757",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
