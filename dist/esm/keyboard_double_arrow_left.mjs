export const name="keyboard_double_arrow_left";
export const id="dl_56d7770270df3494187d";
export const url=new URL("../icons/keyboard_double_arrow_left.svg?v=ae23c9018ea82e1a6c516d7bd43bca58a780cb30d1483d5ebfc4af251f58b225",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
