export const name="floppy-disk-light";
export const id="dl_e4d79cf716a74462937c";
export const url=new URL("../icons/floppy-disk-light.svg?v=b0b827c8048e8d15c8bc554f2572c510383b00c033b94fb9c9c9a8096410a550",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
