export const name="paint-brush-broad";
export const id="dl_9a22037aa7d84afb8ebe";
export const url=new URL("../icons/paint-brush-broad.svg?v=5123de478f3f417eb02e5a4066f5351f4266e3e9f695cedf97c04a328e7134b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
