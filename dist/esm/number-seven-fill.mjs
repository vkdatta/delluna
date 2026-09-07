export const name="number-seven-fill";
export const id="dl_27e635101a464bf19d5c";
export const url=new URL("../icons/number-seven-fill.svg?v=38d6c9cd6ac2ba6b0876f44786042819eafaea1406dedac35c725ef3abdcc5e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
