export const name="filter_blocks";
export const id="dl_2fefc810adfc2bbb6178";
export const url=new URL("../icons/filter_blocks.svg?v=f1fd024564c3ef7bd7adef3e3b69d003347253ea8eb5fac1b848c122b25b4817",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
