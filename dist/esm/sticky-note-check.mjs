export const name="sticky-note-check";
export const id="dl_cad95a78ead4431ea7b6";
export const url=new URL("../icons/sticky-note-check.svg?v=3bdbb6ca9c8854348ed6d0d2b128a82cee94b5af33bed456ffe652aa13598554",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
