export const name="bell-slash";
export const id="dl_2b0b6f0e0557426e8d25";
export const url=new URL("../icons/bell-slash.svg?v=d5c7ee0acf3ea46fe7d821dd1816f3d9e2c4aecce6b040722e877b72c85a8d3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
