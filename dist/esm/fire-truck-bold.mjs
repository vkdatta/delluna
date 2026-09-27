export const name="fire-truck-bold";
export const id="dl_14e03df66d9c48b3ac57";
export const url=new URL("../icons/fire-truck-bold.svg?v=13b922d8c0a53976fe1b394ab4007734354523e0b4fd570b6da59a54050688bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
