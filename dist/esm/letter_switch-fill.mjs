export const name="letter_switch-fill";
export const id="dl_c003bace396f1992fd70";
export const url=new URL("../icons/letter_switch-fill.svg?v=9758fc7ad84005e9ff8315bf811794deaacba932d745d5e5f971192493bd2425",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
