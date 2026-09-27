export const name="hands-clapping-duotone";
export const id="dl_3c6c2b3f78c7424e8540";
export const url=new URL("../icons/hands-clapping-duotone.svg?v=7895989775e59a5097719e0f9c8974cd8bfe37000cd82934f66a646351f44a4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
