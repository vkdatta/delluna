export const name="stethoscope_arrow";
export const id="dl_6f99f265fffb68ab77c2";
export const url=new URL("../icons/stethoscope_arrow.svg?v=010d0c046afd27891a8ad05b343119c609795e923954524f32db8a9677f1e827",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
