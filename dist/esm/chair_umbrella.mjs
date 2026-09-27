export const name="chair_umbrella";
export const id="dl_7cfb5bcab8832796eca6";
export const url=new URL("../icons/chair_umbrella.svg?v=8be977294bfc26f7cb660df9226b9e20c9c07d0c7a4485e57ae86bdfea999b1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
