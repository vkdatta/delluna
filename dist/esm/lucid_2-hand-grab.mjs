export const name="lucid_2-hand-grab";
export const id="dl_3da1836884484263b10a";
export const url=new URL("../icons/lucid_2-hand-grab.svg?v=f241acbd51f45aef987e7c567ece52ccc116a9878b21139079becd8ee4d3e3a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
