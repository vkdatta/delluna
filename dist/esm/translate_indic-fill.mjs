export const name="translate_indic-fill";
export const id="dl_c7a567caf266ce2994b9";
export const url=new URL("../icons/translate_indic-fill.svg?v=9acf83667a4d3519dc2d57cdfd405cbff31ea82c158e44a99caef9fa201633b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
