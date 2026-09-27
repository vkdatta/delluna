export const name="ink_eraser";
export const id="dl_617a234bbc95825c9246";
export const url=new URL("../icons/ink_eraser.svg?v=1de150c6c537fa42e6cb76f798986c31250e48b9e8cdd4c9fe2cf21df8fa7cc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
