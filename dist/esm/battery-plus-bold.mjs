export const name="battery-plus-bold";
export const id="dl_cc0eedf384c54d8789d0";
export const url=new URL("../icons/battery-plus-bold.svg?v=9f0daf6dda7493c642c2f5ab6021533a888ef1bb0aee456a90ab7070b92bc11c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
