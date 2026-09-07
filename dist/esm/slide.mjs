export const name="slide";
export const id="dl_f9d8e0e33db347178a01";
export const url=new URL("../icons/slide.svg?v=5244ff66b9453a62adce021d59d01d1b8dedf5fb362917d288e2b3bda198d3ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
