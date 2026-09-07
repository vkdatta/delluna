export const name="knife-fill";
export const id="dl_170c042f2dad4407a4e0";
export const url=new URL("../icons/knife-fill.svg?v=279e8b16e1b9bf8e226abccdd4800bb7fe25b989b5421ba3153428ec8888dfa2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
