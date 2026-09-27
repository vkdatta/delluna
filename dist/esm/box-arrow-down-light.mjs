export const name="box-arrow-down-light";
export const id="dl_6a71c7b9a3f641189519";
export const url=new URL("../icons/box-arrow-down-light.svg?v=cd06dcbde8cd2e5de059a28b4c94d99692c66886fe98a93979b40ee5e93d2cd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
