export const name="language_korean_latin-fill";
export const id="dl_d25ceed26303842bd6b5";
export const url=new URL("../icons/language_korean_latin-fill.svg?v=dece4326e49be269f14a05f41979078d928b90fd5bef31e88b3a5befdbe5d114",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
