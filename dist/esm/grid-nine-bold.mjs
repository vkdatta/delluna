export const name="grid-nine-bold";
export const id="dl_6de73c01abd64d5eaa9b";
export const url=new URL("../icons/grid-nine-bold.svg?v=6d0f8e36243b2cc8085fb7e7fb8d8be28fe84e30d4c947edb216cc1e35a6f78c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
