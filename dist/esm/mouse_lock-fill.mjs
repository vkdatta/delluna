export const name="mouse_lock-fill";
export const id="dl_e20cbe7f4ec0031a34b9";
export const url=new URL("../icons/mouse_lock-fill.svg?v=787e08fa707929ef95721e9a3acf7085ac794b5adc072269712faccbe67a7e9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
