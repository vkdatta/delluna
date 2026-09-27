export const name="ink_highlighter_move";
export const id="dl_6ab4fbd9b44ca0965306";
export const url=new URL("../icons/ink_highlighter_move.svg?v=8c7ab7fd0ee31b90d49de685282fc8a716d3331ee2eceb7177112c612ed5b8bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
