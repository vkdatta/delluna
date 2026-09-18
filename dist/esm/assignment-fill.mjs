export const name="assignment-fill";
export const id="dl_41fcb0f7621344848868";
export const url=new URL("../icons/assignment-fill.svg?v=e627fabf45181817de84febaaf208f8e4f147a35464ca607d351c2dd7d5d60bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
