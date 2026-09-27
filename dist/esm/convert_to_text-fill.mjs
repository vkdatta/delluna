export const name="convert_to_text-fill";
export const id="dl_c1af36123650c7630f9b";
export const url=new URL("../icons/convert_to_text-fill.svg?v=df25dedc28e8094cc6d67b7a9000af6f1c8437dec04e7fdb32bdbed1cc091ca9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
