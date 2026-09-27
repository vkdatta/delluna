export const name="undo-dot";
export const id="dl_8a9ed63fee534c6da385";
export const url=new URL("../icons/undo-dot.svg?v=4d8ae73f9166e6918040643d1ef5d1feba86f5a4d3153eb47477dbd957edcd7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
