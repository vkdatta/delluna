export const name="eyes-fill";
export const id="dl_a98bfdca2d344ccdb80b";
export const url=new URL("../icons/eyes-fill.svg?v=720f9636a565184b9dde3f1d648321eb15f30d0ee6973ab51b2ea469cc1399b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
