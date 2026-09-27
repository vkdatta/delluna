export const name="arrows-split-bold";
export const id="dl_32a8dc1c8ec04139a4b8";
export const url=new URL("../icons/arrows-split-bold.svg?v=5546178b60218aba84fd2f688b01d8e5d2ef234165b6aa15cebea479bdbac78a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
