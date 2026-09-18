export const name="stethoscope_arrow";
export const id="dl_1530bc087e1f404683be";
export const url=new URL("../icons/S/stethoscope_arrow.svg?v=63253302ef4611aee1a5b1b207e6fcd412ad5e1c311b10dc19b5df3c737e9981",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
