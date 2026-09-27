export const name="palette-bold";
export const id="dl_63ae6b4bafb94efea878";
export const url=new URL("../icons/palette-bold.svg?v=49a79d376f392b46fc278599e5a8b9c189fc32c960278d3bf8dad9c62dd8183b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
