export const name="circles-three-fill";
export const id="dl_9d4e36898b1142ebad77";
export const url=new URL("../icons/circles-three-fill.svg?v=c61c6b1f45827888d8cdc23986918f305941e6d3b31ed58bf534ef8d305aaca7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
