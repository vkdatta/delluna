export const name="eyes-fill";
export const id="dl_a98bfdca2d344ccdb80b";
export const url=new URL("../icons/eyes-fill.svg?v=1fbd5a9b5a0c2e35d465f015becddc5c9142bad44946741ba0bb3570cd52de51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
