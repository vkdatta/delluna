export const name="edit_document";
export const id="dl_688fb9ae6fbc385bd58f";
export const url=new URL("../icons/edit_document.svg?v=e50174d32117c262068b94539732d3e604db0d6dc1233ee275162a766fe2649a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
