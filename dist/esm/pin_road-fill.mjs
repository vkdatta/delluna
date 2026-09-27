export const name="pin_road-fill";
export const id="dl_0eb01e024a6c12b4e68d";
export const url=new URL("../icons/pin_road-fill.svg?v=6466f18c2a3b58117cbb087350fa912b2917fa109444825cb36aa17c2a15bee3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
