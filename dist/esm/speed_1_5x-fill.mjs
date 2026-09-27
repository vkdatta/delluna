export const name="speed_1_5x-fill";
export const id="dl_a985edcc213d71d61562";
export const url=new URL("../icons/speed_1_5x-fill.svg?v=72d017b594327a92797aaa949666158a308e5c0d5b9817bdf346448f31146844",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
