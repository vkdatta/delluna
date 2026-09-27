export const name="dog-bold";
export const id="dl_7ea2289a5a9b4c98b5bd";
export const url=new URL("../icons/dog-bold.svg?v=8eabebb5fbe24df4a4c82a2103ffc5940567b6522ea496618c57071693457348",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
