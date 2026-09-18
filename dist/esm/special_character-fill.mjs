export const name="special_character-fill";
export const id="dl_f567225dab534802a74e";
export const url=new URL("../icons/special_character-fill.svg?v=7f63b41e47d2142ead1869b4f2dec352e1b48d45980bddc1226d3cbe7df1b439",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
