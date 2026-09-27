export const name="artist-fill";
export const id="dl_a7bd0c6d7faeb3a6be07";
export const url=new URL("../icons/artist-fill.svg?v=141ad649a7e8e2cfacf08cf92be6e7516bd9e659179003c33fcdf8c3c781fd1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
