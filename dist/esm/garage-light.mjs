export const name="garage-light";
export const id="dl_96f9367bc8a14164a600";
export const url=new URL("../icons/garage-light.svg?v=94e08d915dd5cc3d8fe7d9523dac667fff073365ae09644dcd6bf3fddc4d6109",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
