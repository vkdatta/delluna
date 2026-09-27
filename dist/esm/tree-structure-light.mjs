export const name="tree-structure-light";
export const id="dl_f31db6f834bbe84eada6";
export const url=new URL("../icons/tree-structure-light.svg?v=20d7e882c6c049b6b856b228efc8bbb565809130818affad93f5567ae6b30544",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
