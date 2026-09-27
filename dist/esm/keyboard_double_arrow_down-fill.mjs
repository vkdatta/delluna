export const name="keyboard_double_arrow_down-fill";
export const id="dl_bb921c49cc77c3e8a581";
export const url=new URL("../icons/keyboard_double_arrow_down-fill.svg?v=0554c8b84a2164b34c6794207bc31ccbd0aff2693941237c828907ec891acb40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
