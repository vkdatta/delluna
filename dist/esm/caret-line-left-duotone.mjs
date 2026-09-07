export const name="caret-line-left-duotone";
export const id="dl_9dd40a99d6b54ad69415";
export const url=new URL("../icons/caret-line-left-duotone.svg?v=146cd2befb9c05f97fd7e9bc66b5fa6518ecf57ca2a2d79c07343562fe1662d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
