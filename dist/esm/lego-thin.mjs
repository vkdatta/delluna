export const name="lego-thin";
export const id="dl_05b5ab00d49b4b9f972b";
export const url=new URL("../icons/lego-thin.svg?v=c11a0d6c7c9a5410349b2bd30784c7e29b5dc7e0805c2d1351f9272151993aac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
