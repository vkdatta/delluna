export const name="chevron_forward-fill";
export const id="dl_17c933812612f0517c4d";
export const url=new URL("../icons/chevron_forward-fill.svg?v=f7cf7201a7dc1f4dd80cb1d74e003ebfadcdd4e898f07a64b5aacc425acf508c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
