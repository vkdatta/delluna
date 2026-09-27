export const name="cloud-x-light";
export const id="dl_96e4a578584148a8a859";
export const url=new URL("../icons/cloud-x-light.svg?v=1dbe7986f01850a8480e4daa6b74349d19963a9813e389d8a3354b81ec779c68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
