export const name="pacemaker";
export const id="dl_ff37a6b59cb347e7a3be";
export const url=new URL("../icons/pacemaker.svg?v=a694fb110c8e71fcf0b721a1ef82e28b03d1b11d66c8fcc4ff851c8d0781d460",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
