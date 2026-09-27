export const name="problem";
export const id="dl_6813483f1ff679520943";
export const url=new URL("../icons/problem.svg?v=a743a0a42e8e538f2153703f30ec80e6ffa6ffdd966a95c23000a3817dd90327",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
