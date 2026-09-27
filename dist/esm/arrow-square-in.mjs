export const name="arrow-square-in";
export const id="dl_1752dd65a70249748fae";
export const url=new URL("../icons/arrow-square-in.svg?v=25ef91dd549cc079017c470a655dde34acd3bfa84e86a7f17c884eb5b07caa21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
