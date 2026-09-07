export const name="floppy-disk-back";
export const id="dl_86d603a97662498f8cd2";
export const url=new URL("../icons/floppy-disk-back.svg?v=852cc8ab73e3eb0dae4f58a647d1705fbdb364401894ab3774914097abe5e6ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
