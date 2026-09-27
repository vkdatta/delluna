export const name="cursor-text-light";
export const id="dl_e203cd8e21014ddfa242";
export const url=new URL("../icons/cursor-text-light.svg?v=83c3f213adc25e14af5507d7c38d79a8127b589bdc90511c14fcdd9c455665bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
