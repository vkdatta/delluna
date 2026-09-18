export const name="mouse_lock-fill";
export const id="dl_59990ffe274649c58f07";
export const url=new URL("../icons/M/mouse_lock-fill.svg?v=787e08fa707929ef95721e9a3acf7085ac794b5adc072269712faccbe67a7e9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
