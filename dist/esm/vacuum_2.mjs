export const name="vacuum_2";
export const id="dl_f972b1b1377c42f8816e";
export const url=new URL("../icons/vacuum_2.svg?v=b48a8d21ba27b7502788f22b40e96c6a82c3d64309b196d618474990a745637e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
