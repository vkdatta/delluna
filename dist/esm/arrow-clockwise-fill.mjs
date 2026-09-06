export const name="arrow-clockwise-fill";
export const id="dl_b98cbba4266f41d7b26b";
export const url=new URL("../icons/arrow-clockwise-fill.svg?v=78963c5a0ad83b74ab6b382640759bc3b8b4f57afb770e7575ad884586476bd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
