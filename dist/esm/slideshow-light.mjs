export const name="slideshow-light";
export const id="dl_0fe21a89878c41a396cc";
export const url=new URL("../icons/slideshow-light.svg?v=e70770162ca2240d9b17513f5b5ab7fe9d0a7125688213c54b57aecef30594ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
