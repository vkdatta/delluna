export const name="drop-slash-bold";
export const id="dl_37b4873bbfb7459486b9";
export const url=new URL("../icons/drop-slash-bold.svg?v=2a2ef29fba498c1ffb8931e3ae3919a3b9944bddb8b5ebd6ae9e21b96df248b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
