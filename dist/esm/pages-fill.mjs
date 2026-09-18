export const name="pages-fill";
export const id="dl_fded0998bd6f4613b552";
export const url=new URL("../icons/pages-fill.svg?v=6660c2606e51379a966f972eba90da7c5afb8eaedfe34082af285917aa91702e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
