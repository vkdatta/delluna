export const name="boot-duotone";
export const id="dl_c0fccfb14b7b4573babb";
export const url=new URL("../icons/boot-duotone.svg?v=ae571b165aafb0b8b21eaeb0e96d5400a5c26804a5a383315795dacb0e3c91b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
