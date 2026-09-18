export const name="road-fill";
export const id="dl_658f8f9615f344b08277";
export const url=new URL("../icons/R/road-fill.svg?v=6b4723e524a830d0dd8844973f13b840823c8200197563fcfedbd7b5955f3ea6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
