export const name="movie_edit-fill";
export const id="dl_567069ccacfba9a51fa4";
export const url=new URL("../icons/movie_edit-fill.svg?v=13c5ce5922edb693a387268db6a40e049e57301c39f35f06bd778b1619427333",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
