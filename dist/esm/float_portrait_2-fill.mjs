export const name="float_portrait_2-fill";
export const id="dl_54dd03ecc44afa35a186";
export const url=new URL("../icons/float_portrait_2-fill.svg?v=d26fce6b11df236051df88f8d83cad097d1d8a43bde25bafdef4442263a3eb5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
