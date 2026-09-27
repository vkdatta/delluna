export const name="edit";
export const id="dl_900a88c049a8b61654b6";
export const url=new URL("../icons/edit.svg?v=df96894547e943fedc3f2d5a062b60f9b2a365bf9e2be15722b5cbda22009200",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
