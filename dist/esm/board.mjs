export const name="board";
export const id="dl_4c3ef9a728d24757883e";
export const url=new URL("../icons/board.svg?v=b9e7b8630d66672d9ce30cf8392e20277fc482537a3629d3c3ea98053147a47b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
