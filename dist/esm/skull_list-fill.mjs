export const name="skull_list-fill";
export const id="dl_5a4209acb19cb6bbb986";
export const url=new URL("../icons/skull_list-fill.svg?v=0d54f5d844978a5aa76de50fca99a9052df62d1f53dc504bbc296d0b1f729480",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
