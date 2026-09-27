export const name="tree-evergreen";
export const id="dl_e70176958adaf6f26e5e";
export const url=new URL("../icons/tree-evergreen.svg?v=a93aba980e2fe9dadca7d18abae744c6150e27096dfd21793e2164ce953b67fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
