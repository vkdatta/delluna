export const name="pen_size_5-fill";
export const id="dl_e2a930a7502f4671eaef";
export const url=new URL("../icons/pen_size_5-fill.svg?v=a4b6e1b140178207d16fef91b4dcf4c9b16086f13099c396a69b10d6ad2654d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
