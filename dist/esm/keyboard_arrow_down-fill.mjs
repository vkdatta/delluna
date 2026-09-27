export const name="keyboard_arrow_down-fill";
export const id="dl_77da1a8d6867d949470d";
export const url=new URL("../icons/keyboard_arrow_down-fill.svg?v=5185d3aea95a54f6dc0b4b8f46909118837b1bd5546823a49c2c0cf3840c5b4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
