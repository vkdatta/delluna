export const name="ink_eraser";
export const id="dl_2cdd7ffa50709cc242f3";
export const url=new URL("../icons/ink_eraser.svg?v=ef4642b37d47ef2682366ecabd74535a0c7925da22b000c109d7f46afecbfab4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
