export const name="thermometer_minus-fill";
export const id="dl_7f945703b09243859551";
export const url=new URL("../icons/T/thermometer_minus-fill.svg?v=fd84ed65164ebfc371865ba00090397b2ad77964d6dd04ab047e4fbfe318dbf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
