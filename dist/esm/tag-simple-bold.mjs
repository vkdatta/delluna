export const name="tag-simple-bold";
export const id="dl_0ff1c04593f41443c74a";
export const url=new URL("../icons/tag-simple-bold.svg?v=86f2a8887263cb4b443f6b8923329480c12d854e05fe5a2ff6f0f0daef90efae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
