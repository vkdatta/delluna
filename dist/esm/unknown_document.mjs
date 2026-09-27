export const name="unknown_document";
export const id="dl_e827b9ce1995d3857b07";
export const url=new URL("../icons/unknown_document.svg?v=7d510272c6851c40f8e67e6e21e04cf05053eb5ce9120db92244f23b1c965790",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
