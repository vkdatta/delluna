export const name="celebration-fill";
export const id="dl_0a2073107050c46e126f";
export const url=new URL("../icons/celebration-fill.svg?v=0705d45839716b577a23adc9744b5bf0834d74a187a56e9de3fbcf8532fab640",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
