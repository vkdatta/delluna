export const name="floppy-disk-back";
export const id="dl_86d603a97662498f8cd2";
export const url=new URL("../icons/floppy-disk-back.svg?v=c029785c3044a28d5b4afc510475e9ed0068019aee208758b4d09830217fbc04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
