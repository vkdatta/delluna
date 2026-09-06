export const name="percent-light";
export const id="dl_15d2707c9b984f0ea17d";
export const url=new URL("../icons/percent-light.svg?v=052d240c34118a2f9385ce22bd7dabcbc93a3c5c18eb7bf1c66fe6c9abe63a9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
