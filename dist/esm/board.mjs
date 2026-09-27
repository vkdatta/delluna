export const name="board";
export const id="dl_4c3ef9a728d24757883e";
export const url=new URL("../icons/board.svg?v=f28c6358f7c7dc99173aa398a55601fe6dbda9acdab4f0990a37073b63a6e795",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
