export const name="edit_square";
export const id="dl_58c471678bc842408367";
export const url=new URL("../icons/edit_square.svg?v=547d3b9bf9080c803d5c6d92c951d1cd7843bf8c2e2b5e8718d856047bc5029d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
