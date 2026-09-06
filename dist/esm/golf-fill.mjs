export const name="golf-fill";
export const id="dl_f8d840d2c9a4450da0e7";
export const url=new URL("../icons/golf-fill.svg?v=4bc4bd1bbc9c7f7078d7c1eb802fac0c4822b861d9b92b1fb10db89a8106c6fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
